import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Question 1',
    answer: 'Answer 1'
  },
  {
    question: 'Question 2',
    answer: 'Answer 2'
  },
  {
    question: 'Question 3',
    answer: 'Answer 3'
  },
  {
    question: 'Question 4',
    answer: 'Answer 4'
  },
  {
    question: 'Question 5',
    answer: 'Answer 5'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-accent-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-accent-blue-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-accent-blue-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-accent-blue-500">
                  {openIndex === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
