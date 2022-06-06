import Icon from '../components/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      defaultValue: 'box',
      control: 'text',
    },
    size: {
      defaultValue: 16,
      control: {
        type: 'range',
        min: 16,
        max: 80,
      },
    },
    strokeWidth: {
      defaultValue: 2,
      control: {
        type: 'range',
        min: 2,
        max: 6,
      },
    },
    rotate: {
      defaultValue: 16,
      control: {
        type: 'range',
        min: 0,
        max: 360,
      },
    },
    color: {
      defaultValue: '#222',
      control: 'color',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
