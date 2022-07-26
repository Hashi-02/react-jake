export const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div>
          <p>チャイルドエリア</p>
        </div>
      ) : null}
    </>
  );
};
