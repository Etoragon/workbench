function Projects({ projects }: { projects: Array<string> }) {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded p-3 text-center"
        >
          <img
            src={"/src/assets/react.svg"}
            alt={`${project} logo`}
            className="mx-auto mb-3 w-16 h-16"
          />
          {project}
        </div>
      ))}
    </div>
  );
}

export default Projects;
