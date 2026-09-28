type Story = {
  name: string;
  context: string;
  quote: string;
};

export default function Testimonials({ stories = [] }: { stories?: Story[] }) {
  if (stories.length === 0) return null;

  return (
    <section className="student-stories">
      <div className="shell">
        <p className="eyebrow">Student stories</p>
        <div className="student-story-grid">
          {stories.map((story) => (
            <blockquote key={story.name}>
              <p>“{story.quote}”</p>
              <footer>
                <strong>{story.name}</strong>
                <span>{story.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
