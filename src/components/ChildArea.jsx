import { memo } from 'react';
export const ChildArea = memo((props) => {
  const { open, onClose } = props;
  //文字入力やボタン押下でレンダリングされる
  const data = [...Array(2000).keys()];
  console.log('ChildArea is rendering...(by2000)');
  data.forEach(() => {
    console.log('...');
  });

  return (
    <>
      {open ? (
        <div>
          <p>チャイルドエリア</p>
          <button onClick={onClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
