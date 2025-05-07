import { Block } from 'payload/types';

export const SampleCardBlock: Block = {
  /** Unique identifier used in the Payload admin UI */
  slug: 'sample-card',

  labels: {
    singular: 'Sample Card',
    plural: 'Sample Cards',
  },

  /**
   * Match the fields that the React component expects:
   *  - text0 → heading
   *  - text1 → description
   *  - media0 → image
   *  - text3 → button label
   *  - text4 → note / meta
   */
  fields: [
    {
      name: 'text0',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'text1',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'media0',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'text3',
      label: 'Button Label',
      type: 'text',
    },
    {
      name: 'text4',
      label: 'Note',
      type: 'text',
    },
  ],
};
