import '../../static/css/free.scss'
import { PlusCircleOutlined } from '@ant-design/icons'
import IconFont from '../../components/IconFont'

// 目标馆
export default function Free () {
  return (
    <div className="free">
      <div className="up">
        {/* 目标列表 */}
        <div className="target">
          <div className="title">
            <h3>有目标</h3>
            <PlusCircleOutlined style={{ fontSize: 16 }}/>
          </div>
          <ul>
            <li>
              <p>2022-03-15 ~ 2022-04-15</p>
              <h6>学习flutter</h6>
              <div className="icons">
                <IconFont type="icon-success" style={{ fontSize: 18 }}/>
                <IconFont type="icon-shibai" style={{ fontSize: 20 }}/>
                <IconFont type="icon-delete" style={{ fontSize: 18 }}/>
              </div>
            </li>
            <li>
              <p>2022-03-15 ~ 2022-04-15</p>
              <h6>学习flutter</h6>
              <div className="icons">
                <IconFont type="icon-success" style={{ fontSize: 18 }}/>
                <IconFont type="icon-shibai" style={{ fontSize: 20 }}/>
                <IconFont type="icon-delete" style={{ fontSize: 18 }}/>
              </div>
            </li>
          </ul>
        </div>
        {/* 学习课程 */}
        <div className="study">

        </div>
        {/* 健身课程 */}
        <div className="keep-fit">

        </div>
      </div>
      <div className="down">

      </div>
    </div>
  )
}