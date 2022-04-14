import '../../static/css/happy.scss'
import { LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
import { Image } from 'antd'
import movie01 from '../../static/img/movie01.png'
import movie02 from '../../static/img/movie02.webp'
import movie04 from '../../static/img/movie04.webp'

export default function Happy () {
  return (
    <div className="happy-box">
      {/* 电影列表 */}
      <div className="movie-box">
        {/* 标题 */}
        <div className="title">
          <div>
            <h3>你可能喜欢的电影</h3>
            <p>根据你的观影历史推荐</p>
          </div>
          <div className="arrows">
            <LeftSquareOutlined />
            <RightSquareOutlined />
          </div>
        </div>
        {/* 电影 */}
        <ul className="list">
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
  )
}