import { ref } from 'vue'
import PageModal from '@/components/page-modal'
type callBackFn = (item?: any) => void
export default function usePageModal(newCb?: callBackFn, editCb?: callBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  const defaultInfo = ref({})

  const handleAddClick = () => {
    defaultInfo.value = {}
    pageModalRef.value!.dialogVisible = true

    newCb && newCb()
  }
  const handleEditClick = (item: any) => {
    defaultInfo.value = { ...item }
    console.log(item)
    pageModalRef.value!.dialogVisible = true

    editCb && editCb(item)
  }

  return {
    pageModalRef,
    defaultInfo,
    handleAddClick,
    handleEditClick
  }
}
