import '../../static/css/simple.scss'
import { Input, Tag, Button } from 'antd'
import { SyncOutlined } from '@ant-design/icons';

const { Search } = Input

export default function Simple () {
  // search处理
  function onSearch() {

  }

  return (
    <div className="simple">
      {/* 找答案 */}
      <div className="search-box">
        <h3>找答案</h3>
        <div className="search">
          <Search placeholder="输入疑问..." allowClear enterButton onSearch={onSearch} style={{ width: 300 }} />
        </div>
        <div className="answer">

        </div>
      </div>
      {/* 吃啥 */}
      <div className="choose-eat">
        <div className="choose">
          <h3>吃啥</h3>
          <div className="filter">
            <div>
              <Tag color="default">酸</Tag>
              <Tag>甜</Tag>
              <Tag>苦</Tag>
              <Tag>辣</Tag>
              <Tag>中餐</Tag>
              <Tag>西餐</Tag>
              <Tag>快餐</Tag>
            </div>
            <Button type="text" icon={<SyncOutlined />}>换一个</Button>
          </div>
        </div>
        <div className="result">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01948357ae884d0000018c1b788d0a.jpg%40900w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652993947&t=1da1dedfd2df81c96edbfb9a296d7d48" alt="" />
        </div>
      </div>
      <div className="choose-wear">
        <div className="head">
          <div className="title">
            <h3>穿啥</h3>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F15%2Fji%2Ful.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652995142&t=e1fd76b3a27230873c3090ee66eff853" alt="" />
          </div>
          <div className="filter">
            <div>
              <Tag>休闲风</Tag>
              <Tag>辣妹</Tag>
              <Tag>中性</Tag>
              <Tag>职业</Tag>
            </div>
            <Button type="text" icon={<SyncOutlined />}>换一个</Button>
          </div>
        </div>
        <div className="result">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs5.mogucdn.com%2Fmlcdn%2Fc45406%2F191125_6fiha4ele4612fc45e8f0aka401bi_3840x5760.jpg&refer=http%3A%2F%2Fs5.mogucdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652995569&t=2c120adf3b300f030867581a1f79ff62" alt="" />
        </div>
      </div>
    </div>
  )
}