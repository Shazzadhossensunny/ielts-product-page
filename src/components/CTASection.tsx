interface Props {
  text: string;
}

const CTASection = ({ text }: Props) => {
  return (
    <section className="bg-[#ff6a1a] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">{text}</p>
        <button className="bg-white text-[#ff6a1a] px-6 py-3 rounded font-medium hover:bg-gray-100 transition">
          Enroll Now (৳1000)
        </button>
      </div>
    </section>
  );
};

export default CTASection;
