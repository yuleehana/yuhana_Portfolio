import SectionTitle from '../../components/common/layout/SectionTitle';
import ProjectCard from './components/ProjectCard';
import layout from '../../styles/layout.module.scss'

const Projects = () => {

  return (
    <div className="inner">
      <SectionTitle
        sectionEyebrow="프로젝트를 클릭하면 자세히 볼 수 있습니다."
        sectionTitle="03. Projects"
      />
      <div className={layout.flexGrid2}>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
