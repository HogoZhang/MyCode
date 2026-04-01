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
            style={{ backgroundImage: "url('/projects/gas.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> 图分析系统</h3>
          <p style={{ wordBreak: 'break-all' }}>
            基于Mysql/CK/Elasticsearch/Kafka/Oracle/
            SqlServer/PostgreSQL/syslog/txt/xlsx/csv等数据源的网络数据关系图分析系统，支持实时数据可视化分析和预警。
            支持关系图节点、关系、属性、样式、预警样式等模型配置。
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
              backgroundImage: "url('/projects/nds.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>业务数据构建平台</h3>
          <p>
            一个数据源构建、业务数据构建、业务数据集模型配置、行为模型配置分析数据集共享、血缘关系可视化、系统日志、操作日志、业务数据日志、数据溯源的配置管理平台。
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
              backgroundImage: "url('/projects/yiwei.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>两客一危监管平台</h3>
          <p>
            一个支持多分屏实时监控查看、车辆定位、视频流回放、超速预警、疲劳驾驶预警...等数十种预警功能。
            支持语音对讲、实时监管通知发送、设备管理、各种统计报表生成、大屏展示等省级监管平台。
          </p>
          <div className="project-tech">
            <span>Vue</span>
            <span>TypeScript</span>
            <span>Electron</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
