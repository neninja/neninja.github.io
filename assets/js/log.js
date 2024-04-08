document.addEventListener('alpine:init', () => {
  Alpine.data('log', () => ({
    allProjects: [],
    filteredProjects: [],
    filteredTechnologies: [],
    filteredTypes: [],
    filteredLinks: [],
    filteredStatus: [],
    init() {
      document.querySelectorAll('#projects > li').forEach(project => {
        this.allProjects.push({
          id: project.dataset.id,
          techs: JSON.parse(project.dataset.techs),
          type: project.dataset.type,
          links: ['hasdoc', 'hasaccess'].filter(link => project.dataset[link] === 'true'),
          wip: project.dataset.wip === 'true'
        });
        this.filteredProjects = this.allProjects.map(project => project.id);
      });
    },
    filterProjects() {
      this.filteredProjects = this.allProjects.filter(project => {
        const hasTech = this.filteredTechnologies.length === 0 || project.techs.some(tech => this.filteredTechnologies.includes(tech));
        const hasType = this.filteredTypes.length === 0 || this.filteredTypes.includes(project.type);
        const hasLink = this.filteredLinks.length === 0 || project.links.some(link => this.filteredLinks.includes(link));
        const hasStatus = this.filteredStatus.length === 0 || this.filteredStatus.includes(project.wip ? 'wip' : 'done');

        return hasTech && hasType && hasLink & hasStatus;
      }).map(project => project.id);
    },
    handleChangeTechnologies(e) {
      if (e.target.checked) {
        this.filteredTechnologies.push(e.target.name)
      } else {
        this.filteredTechnologies = this.filteredTechnologies.filter(tech => tech !== e.target.name)
      }

      this.filterProjects()
    },
    handleChangeTypes(e) {
      if (e.target.checked) {
        this.filteredTypes.push(e.target.name)
      } else {
        this.filteredTypes = this.filteredTypes.filter(tech => tech !== e.target.name)
      }

      this.filterProjects()
    },
    handleChangeLinks(e) {
      if (e.target.checked) {
        this.filteredLinks.push(e.target.name)
      } else {
        this.filteredLinks = this.filteredLinks.filter(tech => tech !== e.target.name)
      }

      this.filterProjects()
    },
    handleChangeStatus(e) {
      if (e.target.checked) {
        this.filteredStatus.push(e.target.name)
      } else {
        this.filteredStatus = this.filteredStatus.filter(tech => tech !== e.target.name)
      }

      this.filterProjects()
    }
  }))
})
