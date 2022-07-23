import styles from './OperateButton.module.scss';

type Props = {
  title: string;
  onClick: () => void;
};

const OperateButton = (props: Props): JSX.Element => {
  const { title, onClick } = props;

  return (
    <button
      className={styles['operate-button']}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default OperateButton;
