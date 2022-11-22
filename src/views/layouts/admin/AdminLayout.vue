<template>
    <v-app>
        <!-- v-if : 조건에 따라 컴포넌트가 실제로 제거되고 생성됨
                v-show : 조건에 따라 css display 속성만 변경됨 -->
        <!-- pc version -->
        <div v-if="!isMobile">
            <AdminHeaderPC @pcSearchStatus="pcSearchStatus" :items="items.value" @addActiveItem="addActiveItem" />
            <AdminSearchPC v-if="pcSearchDrawer" />
        </div>
        <!-- mobile version -->
        <div v-else>
            <AdminHeaderMO @moMenuStatus="moMenuStatus" @moSearchStatus="moSearchStatus" />
            <!--<AdminSearchMO v-if="moSearchDrawer" />
            <AdminMenuMO v-if="moMenuDrawer" />-->
            <v-navigation-drawer absolute temporary v-model="moMenuDrawer">
                <v-list shaped>
                    <v-list-item v-for="item in items.value" :key="item.name">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.name }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-navigation-drawer absolute temporary right v-model="moSearchDrawer">
                Mobile Search Navigation
            </v-navigation-drawer>
        </div>

        <v-main>
            <v-container class="pa-0">
                <v-card tile>
                    <v-card-actions>
                        <v-btn text> Active Menu </v-btn>
                        <v-spacer />
                        <v-btn icon @click="menuShow = !menuShow">
                            <v-icon>{{ menuShow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="menuShow" class="px-2">
                            <v-divider />
                            <v-chip-group>
                                <v-chip v-for="(item, idx) in activeItems.value" :key="idx" close @click="pageOpen(idx)" @click:close="pageClose(idx)">
                                    {{ item }}
                                </v-chip>
                            </v-chip-group>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-container>
        </v-main>
        <AdminFooterMO v-if="isMobile" />
    </v-app>
</template>

<script setup>
import { ref, watch } from 'vue';
import AdminHeaderPC from '@/views/contents/admin/pc/AdminHeaderPC.vue';
import AdminSearchPC from '@/views/contents/admin/pc/AdminSearchPC.vue';
import AdminHeaderMO from '@/views/contents/admin/mobile/AdminHeaderMO.vue';
//import AdminMenuMO from '@/views/contents/admin/mobile/AdminMenuMO.vue';
//import AdminSearchMO from '@/views/contents/admin/mobile/AdminSearchMO.vue';
import AdminFooterMO from '@/views/contents/admin/mobile/AdminFooterMO.vue';
import { computed } from '@vue/composition-api';
import store from '@/store/index';

let menuShow = ref(true);
let items = computed(() => { return store.state.menuStore.adminMenuList });
console.log('AdminLayout -> ', items);

const activeItems = ref([]);
items.value.forEach(e => {
    if(!e.active) activeItems.value.push(e);
});

const addActiveItem = (item) => {
    console.log('addActiveItem ---> ', item);
    item.active = true;
    activeItems.value.push(item);
}

/**
 * 해당 페이지 가로 사이즈를 보고
 * pc인지 mobile인지 판별해서
 * pc header / mobile header를 로딩함
 */
let isMobile = ref(window.innerWidth < 600);
const onResize = () => {
    isMobile.value = window.innerWidth < 600;
    //pcSearchDrawer.value = false; // 수동으로 mobile -> pc를 했을 때 drawer.value가 true로 변경돼서 임시로 적용함. (왜 바뀌지;;)
};
window.addEventListener('resize', onResize);

/**
 * pc search navigation
 */
let pcSearchDrawer = ref(false);
function pcSearchStatus() {
    pcSearchDrawer.value = !pcSearchDrawer.value;
}
watch(pcSearchDrawer, () => {
    console.log('pcSearchDrawer.value 변경 !! ', pcSearchDrawer.value);
})

/**
 * mobile menu navigation
 */
let moMenuDrawer = ref(false);
function moMenuStatus() {
    moMenuDrawer.value = !moMenuDrawer.value;
}
watch(moMenuDrawer, () => {
    console.log('moMenuDrawer.value 변경 !! ', moMenuDrawer.value);
})

/**
 * mobile search navigation
 */
let moSearchDrawer = ref(false);
function moSearchStatus() {
    moSearchDrawer.value = !moSearchDrawer.value;
}
watch(moSearchDrawer, () => {
    console.log('moSearchDrawer.value 변경 !! ', moSearchDrawer.value);
})

// active page sample
let pageGroup = ref(['회원관리', '매장관리', '상품관리', '예약관리', '회원관리', '매장관리', '상품관리', '예약관리', '회원관리', '매장관리', '상품관리', '예약관리']);
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