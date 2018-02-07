#!/usr/bin/env python
# -*- coding:utf-8 -*-
import os
import json


def scanDir(path):
    problems = {}
    if os.path.isdir(path) and path == 'Problems':
        dirList = os.listdir(path)
    for problem in dirList:
        if os.path.isdir(path + "/" + problem):
            detail = problem.split('.')
            answerList = os.listdir(path + "/" + problem)
            problems.update(
                {detail[0]: {'id':detail[0],"name": detail[1], "answer": answerList}})
    return problems


def getData(tag):
    with open('leetcode.json') as json_file:
        data = json.load(json_file)
        return data[tag]


def update(tag):

    tagContent = getData(tag)
    problems = scanDir('Problems')
    tagContent['data'] = sorted(
        tagContent['data'], key=lambda s: s['id'], reverse=False)

    i = 0
    tempMark = ''
    for c in tagContent['data']:
        id = str(c['id'])
        if id in list(problems.keys()):
            i += 1
            if tag != 'All':
                tempMark += "| %d | [%s](%s)| %s | %s |\n" % (
                    c['id'], c['title'], c['url'], c['difficulty'], getAnswerStr(problems[id]))
            else:
                tempMark += "| %d | [%s](%s)| %s | %s | %s |\n" % (c['id'], c['title'], c['url'],
                                                                   c['difficulty'], getTagStr(c), getAnswerStr(problems[id]))

    markdown = "# %s \n" % tag
    markdown += 'You have solved  **%d** / **%d** problems.\n\n' % (i,tagContent['length'])
    if tag != 'All':
        markdown += "| ID | Title | Difficulty | Source code |\n|:--:|:-----:|:----------:|:------------|\n"
    else:
        markdown += "| ID | Title | Difficulty | Tag | Source code |\n|:--:|:-----:|:----------:|:---:|:------------|\n"
    with open('Documents/' + tag + '.md', 'w') as json_file:
        json_file.write(markdown+tempMark)


def getAnswerStr(problem):
    answerStr = []
    if "JavaScript.js" in problem['answer']:
        answerStr.append("[JavaScript](../Problems/%s.%s/JavaScript.js)" % (problem['id'],problem['name']))
    if "PHP.php" in problem['answer']:
        answerStr.append("[PHP](../Problems/%s.%s/PHP.php)" % (problem['id'],problem['name']))
    if "Python.py" in problem['answer']:
        answerStr.append("[Python](../Problems/%s.%s/Python.py)" % (problem['id'],problem['name']))
    if "GoLang.go" in problem['answer']:
        answerStr.append("[GoLang](../Problems/%s.%s/GoLang.go)" % (problem['id'],problem['name']))
    return ','.join(answerStr)


def getTagStr(problem):
    tagStr = []
    for i in range(0, len(problem['tag'])):
        tagStr.append("[%s](https://leetcode.com/tag/%s)" %
                      (problem['tag'][i], problem['tag_url'][i]))
    return ','.join(tagStr)


if __name__ == '__main__':
    update('All')
    update('Array')
    update('Linked List')
    update('Math')
    update('String')
    update('Tree')