// ci: 更改我们的持续集成文件和脚本（e.g.: Travis，GitLab等）
// feat：提交新功能
// fix：修复了bug
// docs：只修改了文档
// style：调整代码格式，未修改代码逻辑（比如修改空格、格式化、缺少分号等）
// refactor：代码重构，既没修复bug也没有添加新功能
// perf：性能优化，提高性能的代码更改
// test: 增加测试代码
// revert: 撤销上一次的commit
// chore: 构建工具或构建过程等的变动，如：关联包升级等
export default [
    {
        time: '2021-03-19',
        version: '1.4.0',
        des: [
            "feat: 新增popover气泡框、timePicker时间选择器"
        ]
    },
    {
        time: '2021-03-11',
        version: '1.3.0',
        des: [
            "perf: keyboard组件体验优化",
            "feat: radio组件新增bindchange事件",
            "feat: tabs组件新增textStyle属性",
            "feat: loading-fullScreen组件新增show属性",
            "feat: drawer组件新增titleStyle、cancelTextStyle、confirmTextStyle属性"
        ]
    },
    {
        time: '2021-03-04',
        version: '1.2.1',
        des: [
            "fix: 修复tabs组价已知问题",
            "refactor: drawer组件contentPostionTop属性改为contentPositionTop",
            "feat: drawer组件新增bindhidden事件，新增disableDraw、disableMaskTap属性",
        ]
    },
    {
        time: '2021-02-02',
        version: '1.1.0',
        des: [
            "style: 删除标签选择器",
            "refactor: loading-fullScreen组件mask属性默认值修改为false",
            "feat: loading-fullScreen组件添加show和hide方法",
            "feat: smsCodeInput组件添加密码类型属性",
            "feat: 新增toast组件",
        ]
    },
    {
        time: '2021-02-01',
        version: '1.0.2',
        des: [
            "chore: 小程序用例修改，README修改"
        ]
    },

    {
        time: '2021-01-30',
        version: '1.0.0',
        des: [
            "初始版本"
        ]
    },


]