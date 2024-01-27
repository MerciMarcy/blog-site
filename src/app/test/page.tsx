import { FlexLayout } from "@/components/uiParts/layout/flex";

const TestPage = () => {
  return (
    <FlexLayout direction="x" style={{gap: '5px'}}>
      <div className="bg-red-500 flex-1">aaa</div>
      <div className="bg-sky-500 flex-1">bbb</div>
      <div className="bg-zinc-500 flex-1">ccc</div>
    </FlexLayout>
  );
}

export default TestPage;
