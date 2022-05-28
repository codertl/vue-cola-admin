import { useLoginStore } from '@/stores/login'

// 查找用户按钮权限 返回布尔值
export function usePermission(pageName: string, handleName: string) {
  const store = useLoginStore()
  const permission = store.userPermission
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permission?.find((item: string) => item === verifyPermission)
}
