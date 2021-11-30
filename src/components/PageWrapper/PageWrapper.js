import Error from '../Error';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';

const PageWrapper = observer(({ children, errorHandler }) => {
  const store = useStore();

  return (
    <>
      {!!store.error.requestError.length > 0 ? (
        <Error errorHandler={errorHandler} />
      ) : (
        children
      )}
    </>
  );
});

export default PageWrapper;
