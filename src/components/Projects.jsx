import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        我的项目
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/MyCode/projects/gas.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> 图分析系统</h3>
          <p style={{ wordBreak: 'break-all' }}>
          独立负责并完成项目调研、开发、自测、部署、交付、bug修复、版本迭代、性能优化及相关专利申请。实现了 MySQL、Kafka、xlsx文件等十余种数据源的数据关系图展示，多种图布局、聚类切换、路径查找分析。实现了自定义图模型配置管理、动态动画样式配置、图数据状态管理(React + Vite + TypeScript + G6.js + websocket + SQL)
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>G6</span>
            <span>TypeScript</span>
            <span>Vite</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/MyCode/projects/nds.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>数据构建平台</h3>
          <p style={{wordBreak: 'break-all'}}>负责项目前端核心模块的设计开发，部分node后端模块的设计开发；最终搭建成一套企业级规范数据构建和持久管理流程。实现了MySQL、Kafka、各类文件、Syslog多数据源的接入管理、原始/配置/资源/业务库等数据集的管理、分权共享能力。实现了数据源经模型、直连/同步任务到具体业务场景数据输出全程血缘追踪与统计大屏；标准字段、标准枚举管理。
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>xFlow</span>
            <span>Typescript</span>
            <span>微前端</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/MyCode/projects/yiwei.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>应用构建平台</h3>
          <p>
            负责应用可视化页面管理的开发维护。<br />
            实现了用户通过拖拽左侧工具栏各种UI组件来构建编辑自定义页面<br />
            通过数据平台的数据集表及其字段的维度指标来构造表格和分析图表<br />
            实现了通过当前页面数据和iframe在当页直接展示图分析/沙箱等外部系统数据可视化组件的能力
          </p>
          <div className="project-tech">
            <span>Vue</span>
            <span>Echarts</span>
            <span>Electron</span>
            <span>Antv</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
