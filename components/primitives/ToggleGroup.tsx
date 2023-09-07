import {
  Root as ToggleGroupRoot,
  Item as ToggleGroupItem,
} from '@radix-ui/react-toggle-group'
import { styled } from '@/styled'

const StyledToggleGroupRoot = styled(ToggleGroupRoot, {
  borderRadius: 8,
  overflow: 'hidden',
  display: 'flex',
  gap: 0,
  borderColor: '$panelBorder',
  height: 55,
  borderWidth: 1,
})

const StyledToggleGroupItem = styled(ToggleGroupItem, {
  background: '$panelBg',
  color: '$gray12',
  p: '$3',
  '&[data-state=on]': { backgroundColor: '$panelActive' },
})

export {
  StyledToggleGroupRoot as ToggleGroup,
  StyledToggleGroupItem as ToggleGroupItem,
  StyledToggleGroupRoot as ToggleGroupRoot,
}
