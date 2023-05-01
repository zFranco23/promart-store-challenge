import classNames from 'classnames'
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem'
import noCartImg from '../../../../assets/no-cart.png'
import type { ShoppingCartItem as SCItem } from '../../../../entities/shopping-cart'

type Props = {
  hasCartItems: boolean
  items: SCItem[]
}
const ItemsContent = (props: Props) => {
  const { hasCartItems, items } = props
  const className = classNames('grow max-wfull overflow-auto mt-4 mb-8 p-4', {
    'flex items-center justify-center': !hasCartItems,
  })

  return (
    <div className={className}>
      {hasCartItems ? (
        <div className='flex flex-col gap-6'>
          {items.map((sc) => (
            <ShoppingCartItem key={`sc-item-${sc.id}`} item={sc} />
          ))}
        </div>
      ) : (
        <div>
          <img src={noCartImg} />
          <p className='text-center'>No tienes productos en tu carrito.</p>
        </div>
      )}
    </div>
  )
}

export default ItemsContent
