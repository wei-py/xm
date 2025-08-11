export interface TreeNode {
  id: number | string
  name: string
  children?: TreeNode[]
  selected: boolean
}

export interface TreeProps {
  data: TreeNode[]
  onChange: (node: TreeNode) => void
}