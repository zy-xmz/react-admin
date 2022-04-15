import '../../static/css/happy.scss'
import { LeftSquareOutlined, RightSquareOutlined, MoreOutlined } from '@ant-design/icons'
import { Image } from 'antd'
import movie01 from '../../static/img/movie01.png'
import movie02 from '../../static/img/movie02.webp'
import movie03 from '../../static/img/movie03.webp'
import movie04 from '../../static/img/movie04.webp'

export default function Happy () {
  return (
    <div className="happy-box">
      {/* 电影列表 */}
      <div className="movie-box">
        {/* 标题 */}
        <div className="title">
          <div class="txt">
            <h3>你可能喜欢的电影</h3>
            <p>根据你的观影历史推荐</p>
          </div>
          <div className="arrows">
            <LeftSquareOutlined style={{ color: '#ccc', fontSize: 26 }} />
            <RightSquareOutlined style={{ color: '#ccc', fontSize: 26 }} />
          </div>
        </div>
        {/* 电影 */}
        <div className="list">
          <ul>
            <li>
              <div>
                <Image width={'100%'} src={movie01} alt="" />
              </div>
              <p>
                <span>千与千寻</span>
                <span>9.4</span>
              </p>
            </li>
            <li>
              <div>
                <Image width={'100%'} src={movie02} alt="" />
              </div>
              <p>
                <span>寻梦环游记</span>
                <span>9.1</span>
              </p>
            </li>
            <li>
              <div>
                <Image width={'100%'} src={movie03} alt="" />
              </div>
              <p>
                <span>头脑特工队</span>
                <span>8.8</span>
              </p>
            </li>
            <li>
              <div>
                <Image width={'100%'} src={movie04} alt="" />
              </div>
              <p>
                <span>青春变形记</span>
                <span>8.2</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* 下半部分 */}
      <div className="below-box">
        <div></div>
        {/* 音乐 */}
        <div className="music">
          <div className="title">
            <div class="txt">
              <h3>音乐库</h3>
              <p>根据你的喜好推荐</p>
            </div>
            <div className="operate">
              <MoreOutlined style={{ color: '#ccc', fontSize: 22 }} />
            </div>
          </div>
          {/* 音乐列表 */}
          <div className="list">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}