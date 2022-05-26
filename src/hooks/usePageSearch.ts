import { ref } from 'vue'
import PageContent from '@/components/page-content'

export default function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handlerSearchClick = (item: any) => {
    pageContentRef.value?.getPageData(item)
  }
  const handlerResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  return {
    pageContentRef,
    handlerSearchClick,
    handlerResetClick
  }
}
