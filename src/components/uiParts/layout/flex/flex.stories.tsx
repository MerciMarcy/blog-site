import { Meta, StoryObj } from '@storybook/react';
import  { FlexPresenter } from './presenter';

const meta: Meta<typeof FlexPresenter> = {
  title: 'uiParts/Layout/FlexLayout',
  component: FlexPresenter,
};

export default meta;

type Story = StoryObj<typeof FlexPresenter>;

export const DirectionX: Story = {
  args: {
    direction: 'x',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500 flex-1">element1</div>
      <div className="bg-sky-500 flex-1">element2</div>
      <div className="bg-zinc-500 flex-1">element3</div>
    </FlexPresenter>
  ),
};

export const DirectionY: Story = {
  args: {
    direction: 'y',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500 flex-1">element1</div>
      <div className="bg-sky-500 flex-1">element2</div>
      <div className="bg-zinc-500 flex-1">element3</div>
    </FlexPresenter>
  ),
};

export const JustifyStart: Story = {
  args: {
    direction: 'x',
    justifyContent: 'justifyStart',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500">element1</div>
      <div className="bg-sky-500">element2</div>
      <div className="bg-zinc-500">element3</div>
    </FlexPresenter>
  ),
};

export const JustifyCenter: Story = {
  args: {
    direction: 'x',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500">element1</div>
      <div className="bg-sky-500">element2</div>
      <div className="bg-zinc-500">element3</div>
    </FlexPresenter>
  ),
};

export const JustifyEnd: Story = {
  args: {
    direction: 'x',
    justifyContent: 'justifyEnd',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500">element1</div>
      <div className="bg-sky-500">element2</div>
      <div className="bg-zinc-500">element3</div>
    </FlexPresenter>
  ),
};

export const JustifyBetween: Story = {
  args: {
    direction: 'x',
    justifyContent: 'justifyBetween',
  },
  render: (args) => (
    <div className='w-full border border-black'>
      <FlexPresenter {...args}>
        <div className="bg-red-500">element1</div>
        <div className="bg-sky-500">element2</div>
        <div className="bg-zinc-500">element3</div>
      </FlexPresenter>
    </div>
  ),
};

export const JustifyAround: Story = {
  args: {
    direction: 'x',
    justifyContent: 'justifyAround',
  },
  render: (args) => (
    <div className="w-full border border-black">
      <FlexPresenter {...args}>
        <div className="bg-red-500">element1</div>
        <div className="bg-sky-500">element2</div>
        <div className="bg-zinc-500">element3</div>
      </FlexPresenter>
    </div>
  ),
};

export const JustifyEvenly: Story = {
  args: {
    direction: 'x',
    justifyContent: 'justifyEvenly',
  },
  render: (args) => (
    <div className="w-full border border-black">
      <FlexPresenter {...args}>
        <div className="bg-red-500">element1</div>
        <div className="bg-sky-500">element2</div>
        <div className="bg-zinc-500">element3</div>
      </FlexPresenter>
    </div>
  ),
};

export const ItemsStart: Story = {
  args: {
    direction: 'x',
    alignItems: 'itemsStart',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500 h-10">element1</div>
      <div className="bg-sky-500 h-12">element2</div>
      <div className="bg-zinc-500 h-14">element3</div>
    </FlexPresenter>
  ),
};

export const ItemsCenter: Story = {
  args: {
    direction: 'x',
    alignItems: 'itemsCenter',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500 h-10">element1</div>
      <div className="bg-sky-500 h-12">element2</div>
      <div className="bg-zinc-500 h-14">element3</div>
    </FlexPresenter>
  ),
};

export const ItemsEnd: Story = {
  args: {
    direction: 'x',
    alignItems: 'itemsEnd',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500 h-10">element1</div>
      <div className="bg-sky-500 h-12">element2</div>
      <div className="bg-zinc-500 h-14">element3</div>
    </FlexPresenter>
  ),
};

export const ItemsStretch: Story = {
  args: {
    direction: 'x',
    alignItems: 'itemsStretch',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500 py-4">element1</div>
      <div className="bg-sky-500 py-8">element2</div>
      <div className="bg-zinc-500 py-12">element3</div>
    </FlexPresenter>
  ),
};

export const ItemsBaseline: Story = {
  args: {
    direction: 'x',
    alignItems: 'itemsBaseline',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500 pt-2 pb-4">element1</div>
      <div className="bg-sky-500 pt-4 pb-8">element2</div>
      <div className="bg-zinc-500 pt-6 pb-12">element3</div>
    </FlexPresenter>
  ),
};

export const Wrap: Story = {
  args: {
    direction: 'x',
    wrap: 'wrap',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500 w-1/2">element1</div>
      <div className="bg-sky-500 w-1/3">element2</div>
      <div className="bg-zinc-500 w-1/3">element3</div>
    </FlexPresenter>
  ),
};

export const Gap: Story = {
  args: {
    direction: 'x',
    gap: 'gap-10',
  },
  render: (args) => (
    <FlexPresenter {...args}>
      <div className="bg-red-500">element1</div>
      <div className="bg-sky-500">element2</div>
      <div className="bg-zinc-500">element3</div>
    </FlexPresenter>
  ),
};
