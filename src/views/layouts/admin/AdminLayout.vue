<template>
    <v-app>
        <div>
            <!-- v-if : 조건에 따라 컴포넌트가 실제로 제거되고 생성됨
                 v-show : 조건에 따라 css display 속성만 변경됨 -->
            <AdminHeaderPC v-if="!isMobile" />
            <AdminHeaderMO v-else @drawerStatus="drawerStatus" />
            <v-navigation-drawer
                v-model="drawer"
                app
                clipped
                hide-overlay
                :style="{ top: $vuetify.application.top + 'px' }">
            </v-navigation-drawer>
        </div>
        <v-main>
            <v-container>
                <v-chip-group>
                    <v-chip v-for="(item, idx) in pageGroup" :key="idx" close @click="pageOpen(idx)" @click:close="pageClose(idx)">
                        {{ item }}
                    </v-chip>
                </v-chip-group>
            </v-container>
        </v-main>
        <AdminFooterMO v-if="isMobile" />
    </v-app>
</template>

<script setup>
import { ref, watch } from 'vue';
import AdminHeaderPC from '@/views/contents/admin/pc/AdminHeaderPC.vue';
import AdminHeaderMO from '@/views/contents/admin/mobile/AdminHeaderMO.vue';
import AdminFooterMO from '@/views/contents/admin/mobile/AdminFooterMO.vue';

/**
 * 해당 페이지 가로 사이즈를 보고
 * pc인지 mobile인지 판별해서
 * pc header / mobile header를 로딩함
 */
let isMobile = ref(window.innerWidth < 600);
const onResize = () => {
    isMobile.value = window.innerWidth < 600;
    drawer.value = false; // 수동으로 mobile -> pc를 했을 때 drawer.value가 true로 변경돼서 임시로 적용함. (왜 바뀌지;;)
};
window.addEventListener('resize', onResize);

/**
 * navigation
 */
let drawer = ref(false);
//const drawerStatus = () => {
//    console.log('drawerStatus 실행');
//    drawer.value = !drawer.value;
//}
function drawerStatus() {
    console.log('drawerStatus 실행');
    drawer.value = !drawer.value;
}
watch(drawer, () => {
    console.log('drawer.value 변경 !! ', drawer.value);
})

// active page sample
let pageGroup = ref(['회원관리', '매장관리', '상품관리', '예약관리']);
// active page chip open
const pageOpen = (idx) => {
    console.log('open :: ', idx);
}
// active page chip close
const pageClose = (idx) => {
    console.log('close :: ', idx);
    pageGroup.value.splice(idx, 1);
}
</script>