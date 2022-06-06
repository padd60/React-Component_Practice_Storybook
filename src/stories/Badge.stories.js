import Image from '../components/Image';
import Badge from '../components/Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Badge',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    count: {
      defaultValue: 10,
      control: 'number',
    },
    maxCount: {
      defaultValue: 100,
      control: 'number',
    },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    showZero: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Badge {...args}>
    <Image
      src="https://picsum.photos/60"
      style={{ borderRadius: 8 }}
      width={60}
    />
  </Badge>
);

export const Default = Template.bind({});

const Template2 = () => (
  <Badge dot>
    <Image
      src="https://picsum.photos/60"
      style={{ borderRadius: 8 }}
      width={40}
    />
  </Badge>
);

export const Dot = Template2.bind({});
