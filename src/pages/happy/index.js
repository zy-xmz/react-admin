import '../../static/css/happy.scss'
import {
  PauseOutlined,
} from '@ant-design/icons'
import { Image } from 'antd'
import movie01 from '../../static/img/movie01.png'
import movie02 from '../../static/img/movie02.webp'
import movie03 from '../../static/img/movie03.webp'
import movie04 from '../../static/img/movie04.webp'
import head from '../../static/img/music_head.webp'
import head2 from '../../static/img/music_head2.webp'
import head3 from '../../static/img/music_head3.png'
import mv1 from '../../static/img/mv1.webp'
import mv2 from '../../static/img/mv2.jpg'
import mv3 from '../../static/img/mv3.webp'
import mv4 from '../../static/img/mv4.webp'
import IconFont from '../../components/IconFont'

export default function Happy () {
  // 获取banner数据
  function getBannerHandle () {
    return [
      {
        img: movie01,
        name: '千与千寻',
        score: '9.4',
      },
      {
        img: movie02,
        name: '寻梦环游记',
        score: '9.1',
      },
      {
        img: movie03,
        name: '头脑特工队',
        score: '8.8',
      },
      {
        img: movie04,
        name: '青春变形记',
        score: '8.2',
      }
    ]
  }

  // 渲染banner列表
  function BannerList (props) {
    const list = props.list
    const items = list.map((item, index) => 
      <li key={ index }>
        <div>
          <Image width={ '100%' } src={ item.img } alt="" />
        </div>
        <p>
          <span>{ item.name }</span>
          <span>{ item.score }</span>
        </p>
      </li>
    )
    return (<ul>{ items }</ul>)
  }

  // 向左移动
  function moveLeftHandle () {
    console.log('点击了')
  }

  // 向右移动
  function moveRightHandle () {
    console.log('点击了+1')
  }

  return (
    <div className="happy-box">
      {/* 电影列表 */}
      <div className="movie-box">
        {/* 标题 */}
        <div className="title">
          <h3>喜欢的电影</h3>
          <div className="arrows">
            <IconFont type="icon-cc-arrow-left-square" onClick={ moveLeftHandle }/>
            <IconFont type="icon-cc-arrow-right-square" onClick={ moveRightHandle }/>
          </div>
        </div>
        {/* 电影 */}
        <div className="list">
          {/* banner列表组件 */}
          <BannerList list={ getBannerHandle() } />
        </div>
      </div>
      {/* 下半部分 */}
      <div className="below-box">
        <div className="video">
          <h3>喜欢的视频</h3>
          <div className="list">
            <ul>
              <li>
                <div className="icon">
                  <IconFont type="icon-play" style={{ color: 'white', fontSize: 30 }}/>
                </div>
                <img src={ mv1 } alt="" />
              </li>
              <li>
                <div className="icon">
                  <IconFont type="icon-play" style={{ color: 'white', fontSize: 30 }}/>
                </div>
                <img src={ mv2 } alt="" />
              </li>
              <li>
                <div className="icon">
                  <IconFont type="icon-play" style={{ color: 'white', fontSize: 30 }}/>
                </div>
                <img src={ mv3 } alt="" />
              </li>
              <li>
                <div className="icon">
                  <IconFont type="icon-play" style={{ color: 'white', fontSize: 30 }}/>
                </div>
                <img src={ mv4 } alt="" />
              </li>
            </ul>
          </div>
        </div>
        {/* 音乐 */}
        <div className="music">
          <h3>喜欢的音乐</h3>
          {/* 音乐列表 */}
          <div className="list">
            <ul>
              <li>
                <IconFont type="icon-pause" />
                <img src={ head } alt="" />
                <div className="txt">
                  <p>17岁</p>
                  <p>刘德华</p>
                </div>
                <span className="duration">4:02</span>
                <IconFont type="icon-like-o" style={{ fontSize: 20 }}/>
              </li>
              <li>
                <IconFont type="icon-pause" />
                <img src={ head2 } alt="" />
                <div className="txt">
                  <p>一生所爱</p>
                  <p>卢冠廷</p>
                </div>
                <span className="duration">4:13</span>
                <IconFont type="icon-like" style={{ color: 'red', fontSize: 20 }}/>
              </li>
              <li>
                <IconFont type="icon-play" style={{ color: '#333', fontSize: 20 }}/>
                <img src={ head3 } alt="" />
                <div className="txt">
                  <p>盛夏的果实</p>
                  <p>莫文蔚</p>
                </div>
                <span className="duration">4:10</span>
                <IconFont type="icon-like" style={{ color: 'red', fontSize: 20 }}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}