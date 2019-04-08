#!/usr/bin/env python
# -*- coding:utf-8 -*-
import os
import json
from string import Template


class Problem:
    number = 0
    name = ''
    title = ''
    url = ''
    difficult = ''
    tag = []
    tag_url = []
    code = []

    def __init__(self, number, name, code):
        self.number = number
        self.name = name
        self.code = code

    def update_data(self, title, url, difficult, tag=None):
        self.title = title
        self.url = url
        self.difficult = difficult
        self.tag = tag


class Problems:
    src = '../src/problems/'
    dit = '../dist/problems/'
    doc_dir = '../doc/'
    data_dir = '../data/'

    jsons = 'problems.json'
    json_data = []
    queue = {}

    def __init__(self):
        self.get_json('All')
        self.scan_dir()

    def gen_lang_string(self, p):
        result = []
        language = {
            'index.ts': 'TypeScript',
            'index.js': 'JavaScript',
            'index.php': 'PHP',
            'index.go': 'Go',
            'index.c': 'C',
            'index.cpp': 'C++',
            'index.java': 'Java'
        }

        for lang in p.code:
            result.append("[%s](%s%s.%s/%s)" % (language.get(lang), self.src, p.number, p.name, lang))

        return ','.join(result)

    def gen_tag_string(self, p):
        result = []
        for tag in p.tag:
            result.append("[%s](https://leetcode.com/tag/%s)" % (tag, tag.replace(' ', '-').lower()))
        return ', '.join(result)

    def scan_dir(self):
        if os.path.isdir(self.src):
            for directory in os.listdir(self.src):
                d = directory.split('.')
                self.queue.update({d[0]: Problem(int(d[0]), d[1], os.listdir(self.src + directory))})

    def get_json(self, tag):
        if len(self.json_data):
            return self.json_data.get(tag).get('data')
        file = self.data_dir + self.jsons
        with open(file) as json_file:
            data = json.load(json_file)
            self.json_data = data
            return self.json_data.get(tag).get('data')

    def update(self, tag):
        if tag is None:
            return

        data = self.get_json(tag)
        ps = self.get_problem(data)
        head = "# %s \n You have solved  **%d** / **%d** problems.\n\n" % (tag, len(ps), len(data))

        file_name = self.doc_dir + tag.replace(' ', '-').lower() + '.md'

        if tag != 'All':
            content = "| ID | Title | Difficulty | Source code |\n|:--:|:-----:|:-----:|:-----:|\n"
            template_string = "| $index | [$title]($url)| $difficult | $code_string |\n"
        else:
            content = "| ID | Title | Difficulty | Tag | Source code |\n|:--:|:---:|:---:|:---:|:----:|\n"
            template_string = "| $index | [$title]($url)| $difficult | $tags_string | $code_string |\n"

        s = Template(template_string)
        for p in ps:
            if tag != 'All':
                content += s.substitute({'index': p.number, 'title': p.title, 'url': p.url, 'difficult': p.difficult,
                                         'code_string': self.gen_lang_string(p)})
            else:
                content += s.substitute({'index': p.number, 'title': p.title, 'url': p.url, 'difficult': p.difficult,
                                         'tags_string': self.gen_tag_string(p), 'code_string': self.gen_lang_string(p)})
        with open(file_name, 'w') as md_file:
            md_file.write(head + content)
        pass

    def get_problem(self, data):
        result = []
        for p in data:
            if str(p['id']) in self.queue.keys():
                temp = self.queue.get(str(p['id']))
                temp.update_data(p['title'], p['url'], p['difficulty'], (p['tag'] if 'tag' in p.keys() else None))
                result.append(temp)
        return result


if __name__ == "__main__":
    p = Problems()
    p.update('All')
    p.update('Array')
    p.update('Linked List')
    p.update('Math')
    p.update('String')
    p.update('Tree')
    p.update('Dynamic Programming')
    p.update('Hash Table')
    p.update('Depth-first Search')
    p.update('Binary Search')
 
