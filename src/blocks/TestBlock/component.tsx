import React from 'react';

export interface SampleCardProps {
  /** Optional callback fired when any editable field is clicked */
  onFieldSelect?: (id: string) => void;
}

const SampleCard: React.FC<SampleCardProps> = ({ onFieldSelect }) => {
  // Local helper so the JSX stays readable
  const handleFieldSelect = (
    e: React.MouseEvent<HTMLElement>,
    id: string,
  ): void => {
    e.stopPropagation();
    onFieldSelect?.(id);
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h2
        className="mb-4 text-2xl font-bold"
        data-field-id="text-0"
        onClick={(e) => handleFieldSelect(e, 'text-0')}
      >
        Welcome to HyperPayload
      </h2>

      <p
        className="mb-6 text-gray-600"
        data-field-id="text-1"
        onClick={(e) => handleFieldSelect(e, 'text-1')}
      >
        This is a sample HyperUI snippet that you can convert to a Payload block.
      </p>

      <img
        src="https://via.placeholder.com/400x200"
        alt="Sample"
        className="mb-4 w-full rounded-md"
        data-field-id="img-2"
        onClick={(e) => handleFieldSelect(e, 'img-2')}
      />

      <div className="flex items-center justify-between">
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          data-field-id="text-3"
          onClick={(e) => handleFieldSelect(e, 'text-3')}
        >
          Learn More
        </button>

        <span
          className="text-gray-500"
          data-field-id="text-4"
          onClick={(e) => handleFieldSelect(e, 'text-4')}
        >
          Last updated: May 2025
        </span>
      </div>
    </div>
  );
};

export default SampleCard;
