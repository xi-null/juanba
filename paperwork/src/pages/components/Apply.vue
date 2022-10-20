<template>
    <div class="details_container" v-if="isShowNational === false">
      <div class="message_nav">
        <div class="message_nav_content">
          <div class="message_nav_content_left" @click="returnHome()">
          <img
            class="message_left_arrow"
            src="../../assets/images/left_arrow.png"
            alt=""
          >
          <span class="message_return">返回</span>
          </div>
          <div class="message_nav_content_title">
          用证申请
          </div>
        </div>
      </div>
      <div class="content_container">
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>姓名</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的姓名"
              v-model="username"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的姓名'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>性别</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
              <template>
                <van-radio-group v-model="checked" direction="horizontal">
                  <van-radio name="0">男</van-radio>
                  <van-radio name="1">女</van-radio>
                </van-radio-group>
              </template>
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>出生日期</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请选择你的出生日期"
              v-model="birthday"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请选择你的出生日期'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>籍贯</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的籍贯"
              v-model="nativeplace"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的籍贯'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>民族</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的民族"
              v-model="nation"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的民族'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>政治面貌</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的政治面貌"
              v-model="political"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的政治面貌'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>身份证号码</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的身份证号码"
              v-model="id"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的身份证号码'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>文化程度</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的文化程度"
              v-model="culturelever"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的文化程度'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>工作部门</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的工作部门"
              v-model="workdepartment"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的工作部门'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>职务</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的职务"
              v-model="work"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的职务'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>家庭住址</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的家庭住址"
              v-model="address"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的家庭住址'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>联系电话</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的联系电话"
              v-model="phonenumber"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的联系电话'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>紧急联系人</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的紧急联系人"
              v-model="emergencycontact"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的紧急联系人'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>紧急联系电话</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入你的紧急联系电话"
              v-model="emergencyphone"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的紧急联系电话'"
            />
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>选择证件</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <van-cell is-link @click="showPopup">
              <input
                class="input_in"
                type="text"
                placeholder="请选择申请的证件"
                v-model="checked2"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='请选择申请的证件'"
              />
            </van-cell>
            <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
              <van-radio-group v-model="checked2">
                <van-radio name="外交护照" class="certi_item">外交护照</van-radio>
                <van-radio name="公务护照" class="certi_item">公务护照</van-radio>
                <van-radio name="普通护照" class="certi_item">普通护照</van-radio>
                <van-radio name="港澳通行证" class="certi_item">港澳通行证</van-radio>
                <van-radio name="台湾通行证" class="certi_item">台湾通行证</van-radio>
                <van-radio name="双程证" class="certi_item">双程证</van-radio>
              </van-radio-group>
              <div class="confirm_certi_btn">
                <button class="confirm_certi" @click="showChoose()">确认</button>
              </div>
            </van-popup>
            </div>
          </div>
        </div>
        <div class="content_item" v-if="checked2 !== '请选择申请的证件'">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>申领证照名称</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              v-model="checked2"
            />
            </div>
          </div>
        </div>
        <div class="content_item" v-if="checked2 !== '请选择申请的证件'">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>是否新证</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <div
              class="input_in"
            >
              否
            </div>
            </div>
          </div>
        </div>
        <div class="content_item" v-if="checked2 !== '请选择申请的证件'">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>开始时间</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <van-cell is-link @click="showPopup2">
              <input
                class="input_in"
                type="text"
                v-model="currentDate"
                placeholder="请选择开始时间"
                onblur="this.placeholder='请选择开始时间'"
              />
            </van-cell>
            <van-popup v-model="show2" position="bottom" :style="{ height: '60%' }">
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                :columns-order="['year', 'month', 'day',]"
                :formatter="formatter"
                item-height="12vw"
                :min-date="today"
                @confirm="clickIt"
              />
            </van-popup>
            </div>
          </div>
        </div>
        <div class="content_item" v-if="checked2 !== '请选择申请的证件'">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>结束时间</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <van-cell is-link @click="showPopup3">
              <input
                class="input_in"
                type="text"
                v-model="currentDate2"
                placeholder="请选择结束时间"
                onblur="this.placeholder='请选择结束时间'"
              />
            </van-cell>
            <van-popup v-model="show3" position="bottom" :style="{ height: '60%' }">
              <van-datetime-picker
                v-model="currentDate2"
                type="date"
                :columns-order="['year', 'month', 'day',]"
                :formatter="formatter"
                item-height="12vw"
                :min-date="today"
                @confirm="clickIt2"
              />
            </van-popup>
            </div>
          </div>
        </div>
        <div class="content_item" v-if="checked2 !== '请选择申请的证件'">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>选择城市</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请选择一个城市"
              v-model="destination"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请选择一个城市'"
              @click="showNational()"
            />
            </div>
          </div>
        </div>
        <div class="content_item" v-if="checked2 !== '请选择申请的证件'">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>具体地点</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入具体地点"
              v-model="place"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入具体地点'"
            />
            </div>
          </div>
        </div>
        <div class="content_item" v-if="checked2 !== '请选择申请的证件'">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>使用事由</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
            <input
              class="input_in"
              type="text"
              placeholder="请输入使用事由"
              v-model="reason"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入使用事由'"
            />
            </div>
          </div>
        </div>
      </div>
      <div class="attention_container" v-if="isShowAttention === true">
        <div class="van_wrap">
          <div class="attention_container_content">
            <p class="attention_title">行前教育</p>
            <div class="attention_content">
              <div
                v-for="(item, index) in attentionList"
                :key=index
                class="attention_content_item"
              >
              <p>{{ item.name }}</p>
              </div>
            </div>
            <div class="attention_content_btn" v-if="isClick === false">
              <button class="attention_content_botton">已阅读并同意({{time}}s)</button>
            </div>
            <div class="attention_content_btn" v-else>
              <button class="attention_content_botton_disabled" @click="closeAttention()">已阅读并同意(0s)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="details_container" v-else>
      <div class="national_container">
        <div class="message_nav">
          <div class="message_nav_content">
            <div class="message_nav_content_left" @click="closeNational()">
              <img
                class="message_left_arrow"
                src="../../assets/images/left_arrow.png"
                alt=""
              >
              <span class="message_return">返回</span>
              </div>
              <div class="message_nav_content_title">
                选择地点
            </div>
          </div>
        </div>
        <div class="nation_container">
          <div class="nation_container_sidebar">
            <a href="#A">A</a>
            <a href="#B">B</a>
            <a href="#C">C</a>
            <a href="#D">D</a>
            <a href="#E">E</a>
            <a href="#F">F</a>
            <a href="#G">G</a>
            <a href="#H">H</a>
            <a href="#I">I</a>
            <a href="#J">J</a>
            <a href="#K">K</a>
            <a href="#L">L</a>
            <a href="#M">M</a>
            <a href="#N">N</a>
            <a href="#O">O</a>
            <a href="#P">P</a>
            <a href="#Q">Q</a>
            <a href="#R">R</a>
            <a href="#S">S</a>
            <a href="#T">T</a>
            <a href="#U">U</a>
            <a href="#V">V</a>
            <a href="#W">W</a>
            <a href="#X">X</a>
            <a href="#Y">Y</a>
            <a href="#Z">Z</a>
          </div>
          <div id="A" class="chart">A</div>
          <div
            class="item_container"
            v-for="item in Alist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="B" class="chart">B</div>
          <div
            class="item_container"
            v-for="item in Blist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="C" class="chart">C</div>
          <div
            class="item_container"
            v-for="item in Clist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="D" class="chart">D</div>
          <div
            class="item_container"
            v-for="item in Dlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="E" class="chart">E</div>
          <div
            class="item_container"
            v-for="item in Elist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="F" class="chart">F</div>
          <div
            class="item_container"
            v-for="item in Flist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="G" class="chart">G</div>
          <div
            class="item_container"
            v-for="item in Glist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="H" class="chart">H</div>
          <div
            class="item_container"
            v-for="item in Hlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="I" class="chart">I</div>
          <div
            class="item_container"
            v-for="item in Ilist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="J" class="chart">J</div>
          <div
            class="item_container"
            v-for="item in Jlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id='K' class="chart">K</div>
          <div
            class="item_container"
            v-for="item in Klist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="L" class="chart">L</div>
          <div
            class="item_container"
            v-for="item in Llist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="M" class="chart">M</div>
          <div
            class="item_container"
            v-for="item in Mlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="N" class="chart">N</div>
          <div
            class="item_container"
            v-for="item in Nlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="O" class="chart">O</div>
          <div
            class="item_container"
            v-for="item in Olist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="P" class="chart">P</div>
          <div
            class="item_container"
            v-for="item in Plist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="Q" class="chart">Q</div>
          <div
            class="item_container"
            v-for="item in Qlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="R" class="chart">R</div>
          <div
            class="item_container"
            v-for="item in Rlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="S" class="chart">S</div>
          <div
            class="item_container"
            v-for="item in Slist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="T" class="chart">T</div>
          <div
            class="item_container"
            v-for="item in Tlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="U" class="chart">U</div>
          <div
            class="item_container"
            v-for="item in Ulist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="V" class="chart">V</div>
          <div
            class="item_container"
            v-for="item in Vlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="W" class="chart">W</div>
          <div
            class="item_container"
            v-for="item in Wlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="X" class="chart">X</div>
          <div
            class="item_container"
            v-for="item in Xlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="Y" class="chart">Y</div>
          <div
          class="item_container"
            v-for="item in Ylist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
          <div id="Z" class="chart">Z</div>
          <div
            class="item_container"
            v-for="item in Zlist"
            :key="item.id"
            @click="choose(item.label)"
          >
            {{item.label}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getUser, getCity } from '../../api/user'
export default {
  data () {
    return {
      attentionList: [
        { name: ' 根据国家和省外办相关规定，为加强我校因公出国（境）教师的政治意识、组织意识和纪律意识，特明确相关纪律要求如下： ' },
        { name: '  一、请登录中国领事服务网http://cs.mfa.gov.cn,浏览有关注意事项和安全提示，注意了解往访国的安全形势和当地治安状况，如遇突发事件或紧急情况，尽量减少外出或避开人群密集、敏感场所，必要时请报警并寻求中国驻当地使领馆的协助。  ' },
        { name: ' 二、增强大局意识，对外交往中，要忠于使命，认真履责，谨守纪律，切实维护国家以及学校的形象和利益。 ' },
        { name: ' 三、自觉遵守保密法律法规，严守保密纪律。增强安全保密意识，未经批准，不得携带涉密载体（包括纸质文件和电磁介质等)；妥善保管内部材料，未经批准，不得对外提供内部文件和资料（如批件、出国（境）申请表、经费情况表、备案表等）；不在非保密场所谈论涉密事项；不得泄露国家秘密和商业秘密。严禁使用个人电脑、手机或其他非涉密载体处理、存储涉密信息。 ' },
        { name: ' 四、教师出访“在外停留天数”和“出访时间”均有特定的计算方法和严格的规定（根据中办发〔2013〕16号文及省外办规定）。例如，经审批，出访时间：2018年8月1日离境（指中国边检出境章日期）～2018年8月5日回抵境内（指中国边检入境章日期），您选择航班和办理通关手续时，须保证护照（或通行证）上加盖的中国边检出、入境章日期分别为2018-08-01、2018-08-05（注：中国边检出境章日期视作离境日期，中国边检入境章日期视作回抵境内日期；如在京、沪、广、厦等地通关离境或入境通关，离境日期可能不同于离开福州的日期，回抵境内日期也可能不同于回到福州的日期）中国边检出、入境章日期均计入在外停留天数，故此例中，在外停留天数为5天。教师出访严禁超期，即，在外停留天数不得超过批准天数。 ' },
        { name: ' 五、严格按批准的往访国别、地区和在外停留时间（离、抵境当日计入在外停留时间）合理安排行程，不得擅自延长在外停留时间；未经批准不得变更出访路线（特别是境外路线），增加出访国家、地区或城市（包括转机），前往与出访任务无关的国家、地区或城市考察、观光，或以任何理由绕道旅行。经批准，需在第三国（地区）转机的，不可出机场。 ' },
        { name: ' 六、严禁安排与公务活动无关的娱乐活动；对商定的公务活动不得应付敷衍甚至随意取消或压缩；不得参加与访问任务无关的活动或会议。 ' },
        { name: ' 七、严禁出入赌博场所，不得使用任何形式的资金参与赌博活动，不准以任何借口自行或接受接待单位安排前往赌博场所，严禁进行网络赌博。 ' },
        { name: ' 八、严禁出入色情场所和观看色情表演，不得参加涉及低级趣味的娱乐旅游项目。 ' },
        { name: ' 九、不得借出访之机谋取私利。 ' },
        { name: ' 十、不得违反囯家规定收送礼品。 ' },
        { name: ' 十一、不得使用公款大吃大喝，聚众酗酒；不得使用公款购买高档消费品、礼品或参加高消费娱乐活动。 ' },
        { name: ' 十二、教师出访应把确保人身生命安全放在第一位，增强防盗、防抢、防诈骗的自我保护意识，如在境外遇到交通和其他意外事故，应立即求助于当地的警察、我驻当地使领馆（或拨打外交部领事保护中心电话：0086-10-12308），或国际救援组织，并尽快向当地外事主管部门报告。在处置突发事件时，如果难以获得其他渠道的援助，可求救于SOS国际组织。 ' },
        { name: ' 十三、增强应急应变意识，注意防范反华敌对势力的干扰、破坏，避免与可疑人员接触，拒收任何可疑信函和物品。不在反华组织活动现场停留、围观。不得随意发表有损国格、人格和不符合国家对外政策的言论。不要随意接受媒体采访。若受到前往国家或地区专门机关的调查或不公正待遇，应保持冷静，遇紧急情况，应及时向派出单位以及我国驻当地使领馆请示报告。 ' },
        { name: ' 十四、在外期间自觉抵制“法轮功”等邪教组织的非法宣传和渗透，不拿各类非法宣传品。要保证严格遵守相关纪律，主动接受我驻外使领馆的领导和监督，遇到突发状况应及时请示报告。 ' },
        { name: ' 十五、建议随身携带邀请函、英文机票订单、英文酒店订单和保单，以备海关查验。 ' },
        { name: ' 十六、增强证照管理意识，切实遵守证照管理的有关规定。交回前请自行扫描、复印证照资料页、签证（注）页及中外方出入境章等，留存备用。 ' },
        { name: ' 十七、保留全程登机牌和电子客票行程单备核。如遇航班延误，请及时向航空公司索要《航班延误证明》（加盖航空公司公章）。 ' },
        { name: ' 十八、教师出访前应知悉并承诺遵守《福州大学关于印发修订后的教职工出国（境）留学管理规定的通知》（福大人〔2019〕74号）、《福州大学关于印发修订后的教职工进修培训管理办法（试行）的通知》（福大人〔2015〕41号）以及出国（境）留学协议书等相关规定。 ' }
      ],
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      currentDate2: new Date(),
      data: new FormData(),
      show2: false,
      show: false,
      show3: false,
      checked: '0',
      checked2: '请选择申请的证件',
      reason: '',
      place: '',
      time: 3,
      isClick: false,
      isShowAttention: true,
      username: '',
      name: 0,
      birthday: '',
      nativeplace: '',
      nation: '',
      political: '',
      id: '',
      culturelever: '',
      workdepartment: '',
      work: '',
      address: '',
      phonenumber: '',
      emergencycontact: '',
      emergencyphone: '',
      destination: '',
      isShowNational: false,
      date: '',
      today: '',
      nationList: [],
      Alist: [],
      Blist: [],
      Clist: [],
      Dlist: [],
      Elist: [],
      Flist: [],
      Glist: [],
      Hlist: [],
      Ilist: [],
      Jlist: [],
      Klist: [],
      Llist: [],
      Mlist: [],
      Nlist: [],
      Olist: [],
      Plist: [],
      Qlist: [],
      Rlist: [],
      Slist: [],
      Tlist: [],
      Ulist: [],
      Vlist: [],
      Wlist: [],
      Xlist: [],
      Ylist: [],
      Zlist: []
    }
  },
  created () {
    this.currentDate = '请选择开始时间'
    this.currentDate2 = '请选择结束时间'
    this.today = new Date()
    console.log('today', this.today)
    getUser().then(res => {
      console.log(res)
      this.username = res.item.user.user.name
      this.name = res.item.user.user.xbm
      this.birthday = res.item.user.csrq
      this.nativeplace = res.item.user.jgm
      this.nation = res.item.user.mzm
      this.political = res.item.user.zzmmm
      this.id = res.item.user.id
      this.culturelever = '硕士学位'
      this.workdepartment = res.item.user.sjtszdw
      this.work = res.item.user.przyjszwm
      this.address = res.item.user.jtzz
      this.phonenumber = res.item.user.phone
    })
    this.close()
    const type = 'national'
    getCity(type).then(res => {
      console.log('nationlist1', res)
      this.nationList = res.page.list
      for (var i = 0; i < this.nationList.length; i++) {
        if (this.nationList[i].remarks === 'A') {
          this.Alist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'B') {
          this.Blist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'C') {
          this.Clist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'D') {
          this.Dlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'E') {
          this.Elist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'F') {
          this.Flist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'G') {
          this.Glist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'H') {
          this.Hlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'I') {
          this.Ilist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'J') {
          this.Jlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'K') {
          this.Klist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'L') {
          this.Llist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'M') {
          this.Mlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'N') {
          this.Nlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'O') {
          this.Olist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'P') {
          this.Plist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'Q') {
          this.Qlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'R') {
          this.Rlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'S') {
          this.Slist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'T') {
          this.Tlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'U') {
          this.Ulist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'V') {
          this.Vlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'W') {
          this.Wlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'X') {
          this.Xlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'Y') {
          this.Ylist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'Z') {
          this.Zlist.push(this.nationList[i])
        }
      }
    })
  },
  methods: {
    clickIt (val) {
      console.log('1', val)
      this.show2 = false
      var timer = val
      console.log('timer', timer)
      console.log(typeof (timer))
      console.log(timer.getMonth())
      const year2 = timer.getFullYear()
      const month2 = timer.getMonth() + 1
      const day2 = timer.getDate()
      const date2 = `${year2}-${month2}-${day2}`
      this.currentDate = date2
      console.log('currentDate', this.currentDate)
    },
    clickIt2 (val) {
      console.log('1', val)
      this.show3 = false
      var timer = val
      console.log('timer', timer)
      console.log(typeof (timer))
      console.log(timer.getMonth())
      const year2 = timer.getFullYear()
      const month2 = timer.getMonth() + 1
      const day2 = timer.getDate()
      const date2 = `${year2}-${month2}-${day2}`
      this.currentDate2 = date2
      console.log('currentDate', this.currentDate2)
    },
    showPopup () {
      this.show = true
    },
    showPopup2 () {
      this.show2 = true
    },
    showPopup3 () {
      this.show3 = true
    },
    formatter (type, val) {
      if (type === 'year') {
        return val
      }
      if (type === 'month') {
        return val
      }
      if (type === 'day') {
        return val
      }
      return val
    },
    getTime () {
      this.date = window.localStorage.getItem('date')
      console.log('this.date', this.date)
    },
    returnHome () {
      this.$router.push({
        path: '/'
      })
    },
    close () {
      var timer = setInterval(() => {
        this.time--
        console.log('时间', this.time)
        if (this.time === 0) {
          clearInterval(timer)
          this.isClick = true
        }
      }, 1000)
    },
    closeAttention () {
      this.isShowAttention = false
    },
    showChoose () {
      this.show = false
    },
    showNational () {
      this.isShowNational = true
    },
    choose (name) {
      this.destination = name
      console.log('destination', name)
      this.isShowNational = false
    },
    closeNational  () {
      this.isShowNational = false
    }
  }
}
</script>

<style scoped lang="scss">
.confirm_certi_btn {
  display: block;
  height: 3.06667vw;
  background-color: #f7f8fa;
}

.confirm_certi {
  display: block;
  width: 100%;
  padding: 1.86667vw 2.13333vw;
  font-size: 4.13333vw;
  color: #646566;
  cursor: pointer;
  background-color: #fff;
  border: none;
}

.certi_item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.33333vw 0;
}

a {
  padding: 0 1.06667vw 0 2.13333vw;
  font-size: 1.33333vw;
  font-weight: 500;
  line-height: -1.13333vw;
  color: #323233;
}

.item_container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  color: #323233;
  background-color: #fff;
}

.chart {
  z-index: 1;
  box-sizing: border-box;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 32px;
  color: #323233;
  background-color: #f4f4f4;
}

.van-index-bar__index {
  padding: 0 8px 0 16px;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
}

.nation_container {
  height: 100vh;
  overflow: scroll;
}

.nation_container_sidebar {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 2;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  transform: translateY(-50%);
}

.national_container {
  height: calc(var(--vh, 1vh) * 100 - 12.26667vw);
  overflow: auto;
}

.input_in {
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-width: 0;
  line-height: inherit;
  color: #323233;
  text-align: left;
  resize: none;
  background-color: transparent;
  border: 0;
}

.content_item_input_in {
  display: flex;
  align-items: center;
}

.must {
  position: absolute;
  left: 8px;
  font-size: 14px;
  color: #ee0a24;
}

.content_item_input {
  position: relative;
  overflow: hidden;
  color: #969799;
  text-align: right;
  word-wrap: break-word;
  vertical-align: middle;
}

.content_item_name {
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 10.5em;
  margin-right: 1.6vw;
  color: #646566;
  text-align: left;
  word-wrap: break-word;
}

.content_item {
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  color: #323233;
  background-color: #fff;
}

.attention_content_botton_disabled {
  height: 7.26667vw;
  padding: 0 1.06667vw;
  font-size: 1.6vw;
  color: #fff;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
  border-radius: 133.2vw;
}

.attention_content_botton {
  height: 7.26667vw;
  padding: 0 1.06667vw;
  font-size: 1.6vw;
  color: #fff;
  background-color: #cc6d70;
  border: 1px solid #cc6d70;
  border-radius: 133.2vw;
}

.attention_content_btn {
  text-align: center;
}

.van_wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.attention_content_item {
  text-indent: 2em;
}

.attention_content {
  height: 60vh;
  margin: 4vw 0;
  overflow: auto;
  font-size: 3.46667vw;
  line-height: 1.4;
}

.attention_title {
  font-size: 4.53333vw;
  font-weight: 500;
  line-height: 1.6;
  text-align: center;
}

.attention_container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  font: inherit;
  vertical-align: baseline;
  background-color: #fff !important;
}

.attention_container_content {
  padding: 4vw;
  margin: 19vw 4vw;
  background-color: #fff;
  border-radius: 5.33333vw;
}

.message_nav {
  position: relative;
  line-height: 22px;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
  background-color: #b13a3d;
}

.message_nav_content {
  position: relative;
  display: flex;
  align-items: center;
  height: 10.9vw;
}

.message_nav_content_left {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
}

.message_left_arrow {
  width: 6vw;
  height: 6vw;
  text-align: center;
}

.message_return {
  position: relative;
  z-index: 1;
  font-size: 3.5vw;
  color: #fff;
  text-align: center;
}

.message_nav_content_title {
  max-width: 60%;
  margin: 0 auto;
  font-size: 4.2vw;
  font-weight: 500;
  color: #fff;
}
</style>
