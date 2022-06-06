import Spacer from '../components/Spacer';
import Slider from '../components/Slider';
import Icon from '../components/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Slider',
  component: Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    defaultValue: {
      defaultValue: 1,
      control: 'number',
    },
    min: {
      defaultValue: 1,
      control: 'number',
    },
    max: {
      defaultValue: 100,
      control: 'number',
    },
    step: {
      defaultValue: 0.1,
      control: 'number',
    },
    onChange: { action: 'onChange' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});

const Template2 = () => (
  <Spacer>
    <span />
    <Icon name="volume" />
    <Slider style={{
      width: 100,
      display: 'inline-block',
    }}
    />
    <Icon name="volume-2" />
  </Spacer>
);

export const Volume = Template2.bind({});
