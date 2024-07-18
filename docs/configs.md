# TextView API

## 属性

| 参数              | 说明                                                  | 类型    | 默认值  |
| :---------------- | :---------------------------------------------------- | :------ | :------ |
| content           | 文本内容                                              | string  | -       |
| rows              | 控制多少行出现按钮                                    | number  | 2       |
| open-text         | 控制展开按钮文本                                      | string  | 展开    |
| close-text        | 控制收起按钮文本                                      | string  | 收起    |
| link              | 控制是否跳转外部链接                                  | string  | -       |
| is-click          | 为`true`时，不会展开收起，只会向外传递`btn-click`事件 | boolean | false   |
| content-color     | 文本颜色                                              | string  | -       |
| button-color      | 按钮字体颜色                                          | string  | #077fef |
| button-background | 按钮背景颜色                                          | string  | #fff    |

## 事件

| 参数      | 说明           | 类型     |
| :-------- | :------------- | :------- |
| btn-click | 按钮点击时触发 | Function |
