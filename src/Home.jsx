import BlendingSection from './Blend';

export default function Home() {
  return (
    <main>
      <BlendingSection bgColor="bg-blue-900">
        {/* Your content here */}
        <h2 className="text-white text-3xl font-light mb-6">Section Title</h2>
        <p className="text-gray-300 max-w-2xl">
          Your section content goes here. This will have the smooth blending effect
          when scrolling into view.
        </p>
      </BlendingSection>

      <BlendingSection bgColor="bg-indigo-900">
        {/* Another section with different background */}
        <h2 className="text-white text-3xl font-light mb-6">Next Section</h2>
      </BlendingSection>
    </main>
  );
}