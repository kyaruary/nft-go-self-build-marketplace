// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useConnectModal } from '@rainbow-me/rainbowkit'
// // import { CartPopover, useCart } from '@/gotrading-kit'
// import { Flex, Button, Text } from '@/primitives'

// const CartButton = () => {
//   // const { data: cartItems } = useCart((cart) => cart.items)
//   const { openConnectModal } = useConnectModal()

//   const cartItems = []

//   return (
//     <CartPopover
//       onConnectWallet={() => {
//         openConnectModal?.()
//       }}
//       trigger={
//         <Button
//           css={{
//             justifyContent: 'center',
//             width: '44px',
//             height: '44px',
//             position: 'relative',
//           }}
//           size="small"
//           color="gray3"
//         >
//           <FontAwesomeIcon icon={faShoppingCart} width="16" height="16" />
//           {cartItems.length > 0 && (
//             <Flex
//               align="center"
//               justify="center"
//               css={{
//                 borderRadius: '99999px',
//                 width: 20,
//                 height: 20,
//                 backgroundColor: '$primary9',
//                 position: 'absolute',
//                 top: -8,
//                 right: -6,
//               }}
//             >
//               <Text style="subtitle3" css={{ color: 'white' }}>
//                 {cartItems.length}
//               </Text>
//             </Flex>
//           )}
//         </Button>
//       }
//     />
//   )
// }

export function CartButton(props: any) {
  return null
}

export default CartButton
