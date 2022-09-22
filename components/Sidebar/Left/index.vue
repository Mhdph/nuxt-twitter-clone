<template>
  <div class="h-screen flex flex-col">
    <div
      class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/"
        ><div class="w-8 h-8">
          <LogoTwitter /></div
      ></nuxt-link>
    </div>

    <div class="mt-2 space-y-3">
      <SidebarLeftTab>
        <template v-slot:name>Home</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:name>Explore</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:name>Notifications</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:name>Messages</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:name>Bookmarks</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:name>Lists</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:name>Profile</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:name>More</template>
      </SidebarLeftTab>
    </div>
  </div>
</template>

<script setup lang="ts">
const { defaultTransition } = useTailwindConfig();
</script>
