import Toggle from '../components/Toggle';
import Avatar from '../components/Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: { defaultValue: 'https://picsum.photos/200' },
    shape: {
      defaultValue: 'circle',
      control: 'inline-radio',
      options: ['circle', 'round', 'square'],
    },
    size: {
      defaultValue: 70,
      control: {
        type: 'range',
        min: 40,
        max: 200,
      },
    },
    mode: {
      defaultValue: 'cover',
      control: 'inline-radio',
      options: ['contain', 'cover', 'fill'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

const Template2 = () => (
  <Avatar.Group size={40}>
    <Avatar src="https://picsum.photos/200?1" />
    <Avatar src="https://picsum.photos/200?2" />
    <Avatar src="https://picsum.photos/200?3" />
    <Avatar src="https://picsum.photos/200?4" />
    <Toggle />
  </Avatar.Group>
);

export const Group = Template2.bind({});
