import '../../static/css/free.scss'
import { PlusCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
import IconFont from '../../components/IconFont'
import book from '../../static/img/book.png'

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
        <div className="lesson-style">
          <h3>能力强</h3>
          <ul>
            <li>
              <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.uihtm.com%2Fupload%2Fportal%2F20210325%2Ff6cd5eddad7f67294e131ce0e12e50bd.png&refer=http%3A%2F%2Fwww.uihtm.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653169274&t=e8d53a36a8572c9dd220293210352ca0" alt="" />
              <div>
                <ClockCircleOutlined style={{ fontSize: 11 }} />
                25min
              </div>
            </li>
            <li>
              <img src="https://img2.baidu.com/it/u=1465402254,31544508&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="" />
              <div>
                <ClockCircleOutlined style={{ fontSize: 11 }} />
                25min
              </div>
            </li>
          </ul>
        </div>
        {/* 健身课程 */}
        <div className="lesson-style">
          <h3>身体棒</h3>
          <ul>
            <li>
              <img src="https://img1.baidu.com/it/u=1148627931,1781784234&fm=253&fmt=auto&app=120&f=JPEG?w=630&h=420" alt="" />
              <div>
                <ClockCircleOutlined style={{ fontSize: 11 }} />
                25min
              </div>
            </li>
            <li>
              <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdrdbsz.oss-cn-shenzhen.aliyuncs.com%2F2105021204111245180546.jpeg&refer=http%3A%2F%2Fdrdbsz.oss-cn-shenzhen.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653167160&t=b5dd0987a67871304f7495703e5604d2" alt="" />
              <div>
                <ClockCircleOutlined style={{ fontSize: 11 }} />
                25min
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="down">
        <ul>
          <li>
            <div className="img-box">
              <img src={book} alt="" />
            </div>
            <div className="txt-box">
              <div className="stars">
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#ccc' }}></IconFont>
                <span className="score">8.1</span>
              </div>
              <h6>文化社会学</h6>
              <p>周怡 / 郭巍蓉 / 郑雅君 / 唐俊超</p>
            </div>
          </li>
          <li>
            <div className="img-box">
              <img src={book} alt="" />
            </div>
            <div className="txt-box">
              <div className="stars">
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#ccc' }}></IconFont>
                <span className="score">8.1</span>
              </div>
              <h6>文化社会学</h6>
              <p>周怡 / 郭巍蓉 / 郑雅君 / 唐俊超</p>
            </div>
          </li>
          <li>
            <div className="img-box">
              <img src={book} alt="" />
            </div>
            <div className="txt-box">
              <div className="stars">
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#ccc' }}></IconFont>
                <span className="score">8.1</span>
              </div>
              <h6>文化社会学</h6>
              <p>周怡 / 郭巍蓉 / 郑雅君 / 唐俊超</p>
            </div>
          </li>
          <li>
            <div className="img-box">
              <img src={book} alt="" />
            </div>
            <div className="txt-box">
              <div className="stars">
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#FFAC2C' }}></IconFont>
                <IconFont type="icon-star" style={{ color: '#ccc' }}></IconFont>
                <span className="score">8.1</span>
              </div>
              <h6>文化社会学</h6>
              <p>周怡 / 郭巍蓉 / 郑雅君 / 唐俊超</p>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  )
}