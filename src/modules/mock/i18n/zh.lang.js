module.exports = {
    moduleName : 'Mock',
    name : '名称',
    nameDefault : '未命名 {0} Mock',
    type : '类型',
    operations : '操作',
    setting : '设置',
    stopConfirm : 'Mock 正在运行中， 是否停止 ?',
    start : '启动',
    startFailed : '启动 Mock 服务失败 : {0}',
    stop : '停止',
    mockDeleteConfirm : '是否删除该 Mock ?',
    mockerSetting : 'Mock 设置',
    dataSendSize : '发送',
    dataReceiveSize : '接收',
    mockerStarted : 'Mock 服务已启动',
    mockerStopped : 'Mock 服务已停止',
    mockerNotStarted : 'Mock 服务未启动',
    mockers : {
        serialport : require('../mockers/serialport/i18n/zh.lang.js'),
        tcp : require('../mockers/tcp/i18n/zh.lang.js'),
        udp : require('../mockers/udp/i18n/zh.lang.js'),
        websocket : require('../mockers/websocket/i18n/zh.lang.js'),
    },
    status : {
        title : '状态',
        columnName : '名称',
        columnDefaultValue : '默认值',
        columnRuntimeValue : '运行值',
        runtimeValueUpdated : '状态值已更新',
        runtimeValueUpdateFailed : '状态值更新失败 : {0}',
        nameNotExists : '状态 "{0}" 不存在',
    },
    responseFailed : '发送内容失败： {0}',
    responseContentCanNotBeEmpty : '发送内容不可为空',
    response : {
        match : {
            title : '匹配',
            columnStatus : '状态',
            columnName : '名称',
            columnMatch : '匹配',
            columnResponse : '响应',
            regexEnable : '正则表达式',
            matcherAll : '全部',
            matcherText : '文本',
            matcherHex : 'HEX',
            matcherScript : '脚本',
            matcherJson : 'JSON',
            matcherJsonTitle : '表达式设置',
            matcherJsonPlaceholder : '表达式',
            entryName : '匹配 : {0}',
            entryNameNotMatch : '未匹配',
        },
        manual : {
            title : '手动',
            history : '历史',
            contentCanNotBeEmpty : '发送内容不可为空',
        },
        snippet : {
            title : '片段',
            attrName : '名称',
            attrContent : '内容',
            loopSend : '循环发送',
        },
        inlineEditorText : {
            editorName : '文本',
            fullTitle : '文本编辑',
            placeholder : '文本内容',
        },
        inlineEditorHex : {
            editorName : 'Hex',
            fullTitle : 'HEX 编辑',
            placeholder : 'HEX 内容',
        },
        inlineEditorForm : {
            editorName : '表单',
            fullTitle : '表单编辑',
            endianessBig : '大端',
            endianessLittle : '小端',
            empty : '空',
            columnName : '名称',
            columnType : '类型',
            columnValue : '取值',
            columnDesc : '描述',
        },
        inlineEditorScript : {
            fullTitle : '脚本编辑',
            editorName : '脚本',
            placeholder : '脚本内容',
            failedToExecScript : '脚本执行失败 : {0}',
        },
        inlineEditorRandom : {
            fullTitle : '随机模板编辑',
            editorName : '随机',
            placeholder : '随机模板',
        },
    },
};