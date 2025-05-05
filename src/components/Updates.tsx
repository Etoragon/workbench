function Updates({ projects }: { projects: Array<string> }) {
  return (
    <ul className="list-disc pl-5">
      {projects.map((project, index) => (
        <li key={index} className="mb-2">
          <span className="font-bold">{project}</span> - Last updated:{" "}
          <em>date</em>, Commit: <em>message</em>
        </li>
      ))}
    </ul>
  );
}

export default Updates;
