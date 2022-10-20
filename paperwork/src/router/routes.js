import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/components/Login.vue'
import HomeView from '@/pages/components/HomeView.vue'
import MyMessage from '@/pages/components/MyMessage.vue'
import MyDetails from '@/pages/components/MyDetails.vue'
import MyApply from '@/pages/components/MyApply.vue'
import MyApproval from '@/pages/components/MyApproval.vue'
import Apply from '@/pages/components/Apply.vue'
import Record from '@/pages/components/Record.vue'
import ApplyProcess from '@/pages/components/ApplyProcess.vue'
import ApprovalDetails from '@/pages/components/ApprovalDetails.vue'
import RecordDetails from '@/pages/components/RecordDetails.vue'
export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/homeview',
    component: HomeView
  },
  {
    path: '/mymessage',
    component: MyMessage
  },
  {
    path: '/mydetails',
    component: MyDetails
  },
  {
    path: '/myapply',
    component: MyApply
  },
  {
    path: '/myapproval',
    component: MyApproval
  },
  {
    path: '/apply',
    component: Apply
  },
  {
    path: '/record',
    component: Record
  },
  {
    path: '/apply-process',
    component: ApplyProcess
  },
  {
    path: '/approval-details',
    component: ApprovalDetails
  },
  {
    path: '/record-details',
    component: RecordDetails
  }
]
