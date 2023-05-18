<template>
  <div class="page flex-col">
    <Menu></Menu>
    <div class="box_2 flex-col">
      <div class="group">
        <div class="group_1 flex-row" @mousemove="mvfu">
          <div class="group_2 flex-col">
            <div class="box_3 flex-row">
              <div class="section_1 flex-col">
                <div class="section_2 flex-col"></div>
                <span class="text_8">welcom</span>
                <span class="text_9">室/内/设/计/师</span>
              </div>
              <div class="text-wrapper_3 flex-col justify-between">
                <span class="text_10">Hello！</span>
                <span class="text_11">我是&nbsp;孙中旗</span>
              </div>
            </div>
            <div class="box_4 flex-col"></div>
            <span class="text_12">
            我认为，大多数设计师只是试图从他们已经做过的事情中努力，在讲故事方面并没有什么特别之处，而我的回归，将伴随着一个伟大的演讲
          </span>
            <div class="box_5 flex-row justify-between">
              <img
                  class="label_1"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngf65ff06b0df1bb23a1521121df9a3db57b6fbc37936751c3f190c1a1af3e5be5.png"
              />
              <div class="image-wrapper_1 flex-col">
                <img
                    class="image_1"
                    referrerpolicy="no-referrer"
                    src="../../assets/img/SketchPng39955670cae5a1efa7dcf39dbabb3caba995b0a67c5007b92a8c0711f16c607e.png"
                />
              </div>
              <img
                  class="label_2"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPnga9a1cdb232719ab4d3fb1e45139ecfe099831ef83329f89ed4c83766169a104f.png"
              />
            </div>
          </div>
          <div class="group_3 flex-col" :style="{ transform: group3Transform,marginLeft:group3Left}"></div>
          <img
              class="image_2" :style="{ transform: image2Transform,left:image2Left }"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng94fb5de47c267209a71b5a202c0752a4b4263336a980de8a8a121314a0d0de4e.png"
          />
        </div>
      </div>

      <div class="group_4 flex-row">
        <div class="group_30 flex-col">
          <div class="text-wrapper_17">
            <span class="text_80">Design&nbsp;is&nbsp;an</span>
            <span class="text_81"></span>
            <span class="text_82">attitude.</span>
          </div>
          <span class="text_83">设计是一种态度。</span>
        </div>
        <div class="group_5 flex-col"></div>
        <span class="text_13">“</span>
        <span class="text_14">”</span>
      </div>
      <div class="szh_group1 xs1" :style="{ opacity: scrolled1 ? 1 : 0 }">
        <div class="group_6 flex-row justify-end">
          <span class="text_15">work</span>
          <div class="image-text_1 flex-row justify-between">
            <span class="text-group_1">MORE</span>
            <img
                class="thumbnail_1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngc0ba360a1de9540f92e3b89043f13dee6ddbb889c62610f109f089037491cd6d.png"
            />
          </div>
          <span class="text_16">01</span>
        </div>
        <span class="text_17">项目</span>
        <div class="swapper" ref="carousel">
          <div class="slider" v-for="(item, index) in itemsNum" :key="index" :style="{ opacity: index==currentItem ? 1 : 0 }" >
            <div class="group_7 flex-row justify-between">
              <div class="group_8 flex-col justify-between">
                <div class="group_9 flex-col"></div>
                <div class="text-group_2 flex-col justify-between">
                  <span class="text_18">{{ items[index*2].title }}</span>
                  <span class="text_19">一个人的家可以冷峻也可以温暖</span>
                </div>
              </div>
              <div class="group_10 flex-col">
                <span class="text_20">讲讲：</span>
                <span class="text_21">整个暗色调，会让人更有安全感，点缀的一些木色让家看着更温馨</span>
                <img
                    class="image_3"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng6aa76cd5127a612be8260fa99ceded3c832f1a635a21b389950b5d30b729d402.png"
                />
              </div>
              <div class="group_11 flex-col"></div>
              <div class="group_12 flex-col">
                <span class="text_22">讲讲：</span>
                <span class="text_23">整个暗色调，会让人更有安全感，点缀的一些木色让家看着更温馨</span>
                <img
                    class="image_4"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngd55980886c50e3ce97792eaeda6bef9d842677297178c942617d9108e00ec045.png"
                />
              </div>
            </div>
            <div class="text-group_3 flex-col justify-between">
              <span class="text_24">{{ items[index*2+1].title }}</span>
              <span class="text_25">当梦想与现实碰撞，需要有一个地方承载我的想象</span>
            </div>
          </div>
        </div>

        <div class="group_13 flex-row">
          <img @click="prev"
              class="image_5"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngca1a9a30d3879fa45f943d01e7f05574baa7a8c268d305bf8bdf5aee8af7b0a3.png"
          />
          <img @click="next"
              class="image_6"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPnge736e7232a9173734f1c1c5f1de0da819efdfdd5d1ce6c767eeddfb1bf93d1f9.png"
          />
          <div class="box_6 flex-col">
            <div class="section_3 flex-col" :style="{width:(100/itemsNum.length)+'%',marginLeft:(currentItem*(100/itemsNum.length))+'%'}"></div>
          </div>
        </div>
      </div>
      <div class="szh_group1 xs2" :style="{ opacity: scrolled2 ? 1 : 0 }">
        <div class="group_6 flex-row justify-end">
          <span class="text_15">article</span>
          <div class="image-text_1 flex-row justify-between">
            <span class="text-group_1">MORE</span>
            <img
                class="thumbnail_1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngc0ba360a1de9540f92e3b89043f13dee6ddbb889c62610f109f089037491cd6d.png"
            />
          </div>
          <span class="text_16">02</span>
        </div>
        <span class="text_17">知识</span>
        <div class="group_15 flex-row justify-between">
          <div class="image-text_3 flex-col justify-between">
            <div class="block_1 flex-col"></div>
            <div class="text-group_5 flex-col">
              <div class="text-wrapper_5 flex-row"><span class="text_29">2022</span></div>
              <div class="text-wrapper_6 flex-row justify-between">
                <span class="text_30">7-15</span>
                <span class="text_31">装修小知识：水管老化怎么办？这三招教你解决你能遇到的所有问题</span>
              </div>
            </div>
          </div>
          <div class="group_16 flex-col justify-between">
            <div class="box_7 flex-row justify-end">
              <div class="text-group_6 flex-col justify-between">
                <span class="text_32">6-15</span>
                <span class="text_33">2022</span>
              </div>
              <div class="image-text_4 flex-row justify-between">
                <div class="box_8 flex-col justify-between">
                  <span class="text-group_7">装修小知识：房间看起来太空怎么办？5个办法教你</span>
                  <img
                      class="image_7"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng06bc4f678d176608001bfd52d2ab274646fa30a6ad261514ae7a7a5765b8f183.png"
                  />
                </div>
                <div class="box_9 flex-col">
                  <img src="./assets/img/175729d1a75647679e63e4b48a8f164a_mergeImage.png">
                </div>
              </div>
            </div>
            <div class="box_7 flex-row justify-end">
              <div class="text-group_6 flex-col justify-between">
                <span class="text_32">6-15</span>
                <span class="text_33">2022</span>
              </div>
              <div class="image-text_4 flex-row justify-between">
                <div class="box_8 flex-col justify-between">
                  <span class="text-group_7">装修小知识：房间里太潮，可以这么做，避免损坏家居</span>
                  <img
                      class="image_7"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng06bc4f678d176608001bfd52d2ab274646fa30a6ad261514ae7a7a5765b8f183.png"
                  />
                </div>
                <div class="box_9 flex-col">
                  <img src="./assets/img/fe70145243ea4845a0c057127d942db7_mergeImage.png">
                </div>
              </div>
            </div>
            <div class="box_7 flex-row justify-end">
              <div class="text-group_6 flex-col justify-between">
                <span class="text_32">6-15</span>
                <span class="text_33">2022</span>
              </div>
              <div class="image-text_4 flex-row justify-between">
                <div class="box_8 flex-col justify-between">
                  <span class="text-group_7">设计篇章：如何能用更少的钱装出很好的效果</span>
                  <img
                      class="image_7"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng06bc4f678d176608001bfd52d2ab274646fa30a6ad261514ae7a7a5765b8f183.png"
                  />
                </div>
                <div class="box_9 flex-col">
                  <img src="./assets/img/c24e14cd503a400ba46c2c293d2036bb_mergeImage.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="szh_group1 xs3" :style="{ opacity: scrolled3 ? 1 : 0 }">
        <div class="group_6 flex-row justify-end">
          <span class="text_15">service</span>
          <div class="image-text_1 flex-row justify-between">
            <span class="text-group_1">MORE</span>
            <img
                class="thumbnail_1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngc0ba360a1de9540f92e3b89043f13dee6ddbb889c62610f109f089037491cd6d.png"
            />
          </div>
          <span class="text_16">03</span>
        </div>
        <span class="text_17">服务</span>
        <div class="group_18 flex-row justify-between">
          <div class="image-text_8 flex-col justify-between">
            <img
                class="image_10"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng3f700e3fa6efeb3d2234273eb3bf1a57f4454a74d81344c7d6a636aac57b4fab.png"
            />
            <span class="text-group_13">重视设计</span>
          </div>
          <div class="image-text_9 flex-col justify-between">
            <img
                class="image_11"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng874d26e9933662e436b92863f76dac2e2c1d3e637794fa0c21c7fbcc07251e06.png"
            />
            <span class="text-group_14">专注细节</span>
          </div>
          <div class="image-text_10 flex-col justify-between">
            <img
                class="image_12"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngcc47818615f38d533fdb780d7543b7dcde67c41db5b6294440953be7f1a1a03f.png"
            />
            <span class="text-group_15">跟进回访</span>
          </div>
        </div>
      </div>

      <div class="group_19 flex-row xs4" :style="{ opacity: scrolled4 ? 1 : 0 }" >
        <div class="szh_group2 flex-row">
          <div class="text-wrapper_8 flex-col justify-between">
            <span class="text_41">第一阶段</span>
            <span class="text_42">充分了解客户需求，根据客户需求构思方案绘制草稿</span>
          </div>
          <img
              class="image_13"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng154f203187cd3a20ec45a8757302d7851f7e595bffa86c98fbbf725be67dbf4d.png"
          />
          <div class="box_16 flex-col">
            <div class="text-wrapper_9 flex-row">
              <span class="text_43">02</span>
              <span class="text_44">绘制平面方案，与客户进一步确认需求</span>
            </div>
            <span class="text_45">第二阶段</span>
          </div>
          <img
              class="image_14"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng154f203187cd3a20ec45a8757302d7851f7e595bffa86c98fbbf725be67dbf4d.png"
          />
          <div class="box_17 flex-col">
            <div class="text-wrapper_10 flex-row">
              <span class="text_46">03</span>
              <span class="text_47">绘制空间方案，360度立体展示空间效果</span>
            </div>
            <span class="text_48">第三阶段</span>
          </div>
          <span class="text_49">01</span>
        </div>

      </div>
      <div class="szh_group1 xs5" :style="{ opacity: scrolled5 ? 1 : 0 }">
        <div class="group_6 flex-row justify-end">
          <span class="text_15">past</span>
          <div class="image-text_1 flex-row justify-between">
            <span class="text-group_1">MORE</span>
            <img
                class="thumbnail_1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngc0ba360a1de9540f92e3b89043f13dee6ddbb889c62610f109f089037491cd6d.png"
            />
          </div>
          <span class="text_16">04</span>
        </div>
        <span class="text_17">过往</span>
        <div class="group_21 flex-row">
          <div class="group_22 flex-col">
            <div class="flex-col gwswapper" ref="gwswapper1">
              <div class="flex-col slider gwslider"  v-for="(item, index) in items2" :key="index" :style="{ opacity: index==currentItem2 ? 1 : 0 }">
              <span class="paragraph_1">
                {{item.desc}}
              </span>
                <div class="image-text_12 flex-row justify-between">
                  <div class="group_23 flex-col">
                    <img src="./assets/img/718b18237d9c49b29b81de22d6fdf066_mergeImage.png">
                  </div>
                  <div class="text-group_17 flex-col justify-between">
                    <span class="text_53">{{ item.name }}</span>
                    <span class="text_54">{{item.location}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="image_15 justify-between">
              <img referrerpolicy="no-referrer" @click="prev2"
                   src="./assets/img/SketchPngca1a9a30d3879fa45f943d01e7f05574baa7a8c268d305bf8bdf5aee8af7b0a3.png"
              />
              <img referrerpolicy="no-referrer"  @click="next2"
                   src="./assets/img/SketchPnge736e7232a9173734f1c1c5f1de0da819efdfdd5d1ce6c767eeddfb1bf93d1f9.png"
              />
            </div>
          </div>
          <div class="gwswapper" ref="gwswapper2">
            <div class="slider gwslider flex-row" v-for="(item, index) in items2" :key="index" :style="{ opacity: index==currentItem2 ? 1 : 0 }">
              <div class="group_24 flex-col">
                <img src="./assets/img/b05cb38bd1ce4b64bc4ea6ec8eb33ff9_mergeImage.png" >
                <div class="box_18 flex-col">
                  <div class="block_2 flex-row justify-between" v-for="(d,i) in item.timeline" :key="i">
                    <div class="block_3 flex-col"></div>
                    <div class="text-group_18 flex-col justify-between">
                      <span class="text_55">{{d.time}}</span>
                      <span class="text_56">{{d.desc}}</span>
                    </div>
                  </div>
                  <img
                      class="image_16"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngbe7fcf2b338a9dc3490b2dbe671844cac907946c5a6c4735d757a0806fe8de0b.png"
                  />
                </div>
              </div>
              <div class="group_27 flex-col">
                <img src="./assets/img/0a6ee0e81bf045aba865c4c8c1d06781_mergeImage.png">
              </div>
            </div>
          </div>

        </div>
      </div>
    <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Menu from '../commons/menu/index.vue'
import Footer from "../commons/footer/index.vue";
export default {
  components: {Menu,Footer},
  data() {
    Menu
    return {
      constants: {},
      group3Transform: '0px',
      group3Left:'120px',
      image2Left:'836px',
      image2Transform: '0px',
      scrolled1: false, // 标记是否已滚动到该模块
      scrolled2: false, // 标记是否已滚动到该模块
      scrolled3: false, // 标记是否已滚动到该模块
      scrolled4: false, // 标记是否已滚动到该模块
      scrolled5: false, // 标记是否已滚动到该模块
      currentItem: 0, // 当前显示的项目索引
      timejg: 0,
      itemsNum:[],//items /2
      items: [//必须双数
        {
          title:"北京 朝阳 国风上观",
          subTitle: "一个人的家可以冷峻也可以温暖",
          desc:"整个暗色调，会让人更有安全感，点缀的一些木色让家看着更温馨"
        },
        {
          title:"北京 朝阳 和乔",
          subTitle: "当梦想与现实碰撞，需要有一个地方承载我的想象",
          desc:"整个暗色调，会让人更有安全感，点缀的一些木色让家看着更温馨"
        },
        {
          title:"北京 朝阳 国风上观2",
          subTitle: "一个人的家可以冷峻也可以温暖",
          desc:"整个暗色调，会让人更有安全感，点缀的一些木色让家看着更温馨"
        },
        {
          title:"北京 朝阳 和乔2",
          subTitle: "当梦想与现实碰撞，需要有一个地方承载我的想象",
          desc:"整个暗色调，会让人更有安全感，点缀的一些木色让家看着更温馨"
        }
        ,
        {
          title:"北京 朝阳 国风上观3",
          subTitle: "一个人的家可以冷峻也可以温暖",
          desc:"整个暗色调，会让人更有安全感，点缀的一些木色让家看着更温馨"
        },
        {
          title:"北京 朝阳 和乔3",
          subTitle: "当梦想与现实碰撞，需要有一个地方承载我的想象",
          desc:"整个暗色调，会让人更有安全感，点缀的一些木色让家看着更温馨"
        }
      ],
      currentItem2: 0, // 当前显示的项目索引
      timejg2: 0,
      items2:[
        {
          desc:"这应该就是我梦想中家的样子，其实我并不喜欢大众的设计，我认为即使是同一个户型，不同的人也应该有不同的设计。在这次装修中，我其实也学习了很多以前没有接触过的知识，原来装修不只是刮刮大白，装装家具这么简单，家装能作为一个专门的学科肯定是有道理的，总之这是一次很棒的体验。",
          name:"赵女士",
          location:"北京 朝阳 和平里",
          timeline:[
            {
              time:"06 / 2021",
              desc:"确定需求，沟通方案"
            },
            {
              time:"07 / 2021",
              desc:"施工进场"
            },
            {
              time:"03 / 2022",
              desc:"硬装施工完成"
            },
            {
              time:"04 / 2022",
              desc:"家具家电进场"
            }
          ]
        },
        {
          desc:"这应该就是我梦想中家的样子，其实我并不喜欢大众的设计，我认为即使是同一个户型，不同的人也应该有不同的设计。在这次装修中，我其实也学习了很多以前没有接触过的知识，原来装修不只是刮刮大白，装装家具这么简单，家装能作为一个专门的学科肯定是有道理的，总之这是一次很棒的体验。",
          name:"王先生",
          location:"北京 海淀 西小口",
          timeline:[
            {
              time:"06 / 2022",
              desc:"确定需求，沟通方案"
            },
            {
              time:"07 / 2022",
              desc:"施工进场"
            },
            {
              time:"03 / 2023",
              desc:"硬装施工完成"
            },
            {
              time:"04 / 2023",
              desc:"家具家电进场"
            }
          ]
        }
      ],
    };
  },
  mounted() {
    this.init();
    window.addEventListener('scroll', this.checkScroll);
    setInterval(()=>{
      if(new Date().getTime()-this.timejg>=2900){
        this.next()
      }
      if(new Date().getTime()-this.timejg2>=2900){
        this.next2()
      }
    },3000);

    for (let i = 0; i < this.items.length; i=i+2) {
      this.itemsNum.push(i)
    }
    this.checkScroll();

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {
    init() {
      // 监听动画结束事件，以便在动画结束后移除动画类
      this.$refs.carousel.addEventListener('animationend', (e) => {
        console.log('carousel.动画。。结束',e)
        this.$refs.carousel.classList.remove('swapperanim');
      });
      // 监听动画结束事件，以便在动画结束后移除动画类
      this.$refs.carousel.addEventListener('webkitAnimationEnd', (e) => {
        console.log('carousel.动画。。结束',e)
        this.$refs.carousel.classList.remove('swapperanim');
      });

      // 监听动画结束事件，以便在动画结束后移除动画类
      this.$refs.gwswapper1.addEventListener('animationend', (e) => {
        console.log('gwswapper1.动画。。结束',e)
        this.$refs.gwswapper1.classList.remove('swapperanim2');
      });
      // 监听动画结束事件，以便在动画结束后移除动画类
      this.$refs.gwswapper1.addEventListener('webkitAnimationEnd', (e) => {
        this.$refs.gwswapper1.classList.remove('swapperanim2');
        console.log('gwswapper1.动画。。结束',e)
      });

      // 监听动画结束事件，以便在动画结束后移除动画类
      this.$refs.gwswapper2.addEventListener('animationend', (e) => {
        console.log('gwswapper2.动画。。结束',e)
        this.$refs.gwswapper2.classList.remove('swapperanim2');
      });
      // 监听动画结束事件，以便在动画结束后移除动画类
      this.$refs.gwswapper2.addEventListener('webkitAnimationEnd', (e) => {
        console.log('gwswapper2.动画。。结束',e)
        this.$refs.gwswapper2.classList.remove('swapperanim2');
      });
    },
    mvfu(e) {
      let x = e.clientX / window.innerWidth - 0.5;
      let moveDistance = 50;
      this.group3Transform = `translateX(${x * moveDistance}px)`;
      this.image2Transform = `translateX(${x * moveDistance}px)`;
      this.group3Left = `${120 - x * moveDistance}px`
      this.image2Left = `${836 - x * 100}px`;
    },
    checkScroll() {
      // 获取视窗的高度
      const viewportHeight = window.innerHeight;
      // 获取模块的位置
      const moduleElement = this.$el.querySelector('.xs1');
      const modulePosition = moduleElement.getBoundingClientRect().top;

      const moduleElement2 = this.$el.querySelector('.xs2');
      const modulePosition2 = moduleElement2.getBoundingClientRect().top;

      const moduleElement3 = this.$el.querySelector('.xs3');
      const modulePosition3 = moduleElement3.getBoundingClientRect().top;

      const moduleElement4 = this.$el.querySelector('.xs4');
      const modulePosition4 = moduleElement4.getBoundingClientRect().top;

      const moduleElement5 = this.$el.querySelector('.xs5');
      const modulePosition5 = moduleElement5.getBoundingClientRect().top;

      // 如果模块位于视窗的上半部分，设置 scrolled 为 true
      if (modulePosition <= viewportHeight / 1.5) {
        this.scrolled1 = true;
      }// 如果模块位于视窗的上半部分，设置 scrolled 为 true
      if (modulePosition2 <= viewportHeight / 1.5) {
        this.scrolled2 = true;
      }
      if (modulePosition3 <= viewportHeight / 1.5) {
        this.scrolled3 = true;
      }
      if (modulePosition4 <= viewportHeight / 1.5) {
        this.scrolled4 = true;
      }
      if (modulePosition5 <= viewportHeight / 1.5) {
        this.scrolled5 = true;
      }
    },
    next() {
      this.timejg=new Date().getTime();
      if (this.currentItem + 1 >= this.itemsNum.length) {
        this.currentItem = 0;
      } else {
        this.currentItem++;
      }
    },
    prev() {
      if (this.currentItem <= 0) {
        this.currentItem = this.itemsNum.length - 1;
      } else {
        this.currentItem--;
      }
    },
    next2() {
      this.timejg2=new Date().getTime();
      if (this.currentItem2 + 1 >= this.items2.length) {
        this.currentItem2 = 0;
      } else {
        this.currentItem2++;
      }
    },
    prev2() {
      if (this.currentItem2 <= 0) {
        this.currentItem2 = this.items2.length - 1;
      } else {
        this.currentItem2--;
      }
    },

  },
  updated() {
    // 将动画类添加到组件中
    this.$refs.carousel.classList.add('swapperanim');
    this.$refs.gwswapper1.classList.add('swapperanim2');
    this.$refs.gwswapper2.classList.add('swapperanim2');

  }
  };
</script>
<style scoped lang="css" src="./assets/index.css" />
