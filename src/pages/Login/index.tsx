import { Button } from 'antd-mobile';

const Login = () => (
  <div>
    <Button color="primary">Button</Button>
    <svg className="icon" aria-hidden="true">
        {/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
        <use xlinkHref="#iconbtn_like_sel"></use>
    </svg>
  </div>
);
export default Login