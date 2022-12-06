module.exports = {
    moduleName : '测试',
    timeout : '响应超时',
    duration : '耗时',
    execStatus : '状态',
    message : '消息',
    buttonStart : '开始',
    buttonStop : '停止',
    beforeScript : '预执行脚本',
    afterScript : '后执行脚本',
    requestParams : '请求参数',
    expectResponseContent : '期待响应内容',
    actualResponseContent : '实际响应内容',
    testcaseDeleteConfirm : '是否删除该测试用例 ?',
    testcaseResponseFormatEmpty : '请配置期待响应数据',
    directiveExecutorError : '指令执行错误：{0}',
    testcaseExecuteAll : '执行所有测试',
    testcaseExecuteAllStop : '停止批量执行',
    testcaseExecuteSummaryTitle : '测试完成',
    testcaseExecuteSummaryDuration : '执行耗时',
    testcaseExecuteSummaryTotalCount : '测试用例总数',
    testcaseExecuteSummaryStatusCount : '测试用例执行状态统计',
    testcaseExecuteStatusPass : '通过',
    testcaseExecuteStatusNotPass : '未通过',
    exportTestReport : '生成测试报告',
    beforeScriptExecuteFailed : '预执行脚本执行失败：{0}',
    afterScriptExecuteFailed : '后执行脚本执行失败：{0}',
    parameterFormat : '请求参数格式',
    responseFormat : '期待响应格式',
    stopOnError : '遇到失败时停止',

    // unit test
    unit : {
        title : '单元测试',
        executeAllCurIndex : '正在执行',
        executeAll : '执行所有测试用例',
        totalCount : '次数',
        successCount : '成功',
        failedCount : '失败',
        duration : '耗时',
        interval : '间隔',
        count : '次数',
        executeRepeatedly : '重复执行',
    },

    // functional
    functional : {
        title : '功能测试',
        create : '新建功能测试',
        unnamed : '未命名测试用例 @ {0}',
        deleteConfirm : '是否删除当前测试用例？',
        addNode : '添加节点',
        saveFailed : '测试用例保存失败',
        saveSuccess : '测试用例保存成功',
        deleteSuccess : '测试用例已删除',
        contextMenuInput : '输入',
        contextMenuOutput : '输出',
        contextMenuRemove : '移除',
        executeAll : '执行所有测试用例',
        executeAllCurIndex : '正在执行',
        executeFailed : '验证未通过',
        executeTimeout : '测试用例执行超时，配置超时时间 : {0}ms',
        executeSuccess : '验证通过',
        executeSuccessMessage : '测试用例执行完毕，所有验证成功执行。',
        startNodeRequired : '测试流程需要【开始】节点来执行测试流程',
        import : '导入',
        importFile : '导入文件',
        importSelectFile : '请选择导入文件',
        importFileIsRequired : '请选择导入文件',
        importDirective : '操作指令',
        importSuccess : '导入成功',
    },

    // Functional test
    functionalNode : {
        Start : require('../functional/node/start/i18n/zh.lang.js'),
        Variable : require('../functional/node/variable/i18n/zh.lang.js'),
        ActHub : require('../functional/node/acthub/i18n/zh.lang.js'),
        Delay : require('../functional/node/delay/i18n/zh.lang.js'),
        Script : require('../functional/node/script/i18n/zh.lang.js'),
        If : require('../functional/node/if/i18n/zh.lang.js'),
        Loop : require('../functional/node/loop/i18n/zh.lang.js'),
        Directive : require('../functional/node/directive/i18n/zh.lang.js'),
        Read : require('../functional/node/read/i18n/zh.lang.js'),
        Expect : require('../functional/node/expect/i18n/zh.lang.js'),
        Done : require('../functional/node/done/i18n/zh.lang.js'),
        Write : require('../functional/node/write/i18n/zh.lang.js'),
    },

    functionalFlowNodeExecuteDirective : '指令',
    functionalFlowNodeExecuteDirectiveNotConfigured : '指令 (未选择)',
    functionalFlowNodeExecuteDirectiveSetting : '指令配置',
    functionalFlowNodeExecuteDirectiveExecInfo : '执行明细',
    functionalFlowNodeExecuteScript : '脚本',
    functionalFlowNodeExecuteRead : '读取',
    functionalFlowNodeExecuteWrite : '写入',
    functionalFlowNodeControlDelay : '延时',
    functionalFlowNodeControlIf : '判断',
    functionalFlowNodeControlLoop : '循环',
    functionalFlowNodeLogicAnd : 'And',
    functionalFlowNodeLogicOr : 'Or',
    functionalFlowNodeLogicNot : 'Not',
    functionalFlowNodeVariable : '变量',
    functionalFlowNodeVariableSetting : '配置',
    functionalFlowNodeVariableInput : '输入',
    functionalFlowNodeVariableOutput : '输出',
    functionalFlowNodeOutputExecute : '执行',
    functionalFlowNodeOutputSuccess : '成功',
    functionalFlowNodeOutputFailed : '失败',
    functionalFlowNodeInputExecute : '执行',

    editModal : {
        title : '测试用例编辑',
        titleDefault : '{0} 测试 @ {1}',
        titlePlaceholder : '测试用例名称',
        testcaseSaveSuccessed : '测试用例保存成功',
        testcaseSaveFailed : '测试用例保存失败',
        createNewTestcase : '创建测试用例',
        settings : '配置',
        comparatorEqual : '等于',
        comparatorIgnore : '忽略',
        comparatorNotEqual : '不等于',
        comparatorGreater : '大于',
        comparatorGreaterOrEqual : '大于等于',
        comparatorLess : '小于',
        comparatorLessOrEqual : '小于等于',
        comparatorBetween : '区间',
        comparatorNotBetween : '不在区间',
        comparatorContains : '包含',
        comparatorNotContains : '不包含',
    },
    exportHtml : {
        headerDirectiveName : '指令名称',
        headerTestcaseName : '测试用例',
        headerStatus : '状态',
        headerParamsFormat : '请求参数格式',
        headerParamsContent : '请求参数',
        headerExpectResponseFormat : '期待响应格式',
        headerExpectResponseContent : '期待响应',
        headerActualResponseContent : '实际响应',
    },
    exportExcel : {
        sheetName : '测试报告',
        headerDirectiveName : '指令名称',
        headerTestcaseName : '测试用例',
        headerStatus : '状态',
        headerParamsFormat : '请求参数格式',
        headerParamsContent : '请求参数',
        headerExpectResponseFormat : '期待响应格式',
        headerExpectResponseContent : '期待响应',
        headerActualResponseContent : '实际响应',
    },
    testResultReportName : '{0} 测试报告 {1}',
    valueEmpty : '空',
};