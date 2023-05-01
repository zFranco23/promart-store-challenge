import styled from 'styled-components';

const QuantityWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  &:disabled {
    opacity: 0.5;
  }
`;

type Props = {
  maxQuantity?: number;
  quantity: number;
  addHandler: () => void;
  removeHandler: () => void;
};

const Quantity = (props: Props) => {
  const { maxQuantity, quantity, addHandler, removeHandler } = props;

  //Implement more complex validation, e.g a product with a stock setting.
  const disabledRemove = quantity <= 1;
  const disabledAdd = typeof maxQuantity === 'number' ? quantity >= maxQuantity : false;

  return (
    <QuantityWrapper>
      <ActionButton onClick={removeHandler} disabled={disabledRemove}>
        <i className='material-icons text-orange'>remove</i>
      </ActionButton>
      <p className='font-bold mx-2'>{quantity}</p>
      <ActionButton onClick={addHandler} disabled={disabledAdd}>
        <i className='material-icons text-orange'>add</i>
      </ActionButton>
    </QuantityWrapper>
  );
};

export default Quantity;
