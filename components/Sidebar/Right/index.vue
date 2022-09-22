<template>
  <div class="flex flex-col">
    <!-- whats hapening -->
    <SidebarRightPreviewCard title="what's happening">
      <SidebarRightItem
        v-for="whtasHappeningItem in whtasHappeningItems"
        :key="whtasHappeningItem.title"
      >
        <slot>
          <h2>{{ whtasHappeningItem.title }}</h2>
          <p>{{ whtasHappeningItem.count }}</p>
        </slot>
      </SidebarRightItem>
    </SidebarRightPreviewCard>

    <!-- who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightItem
        v-for="whoToFollowItem in whoToFollowItems"
        :key="whoToFollowItem.name"
      >
        <div class="flex flex-row items-center justify-between p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="whoToFollowItem.image"
              :alt="whoToFollowItem.name"
            />

            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ whoToFollowItem.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ whoToFollowItem.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightItem>
    </SidebarRightPreviewCard>
  </div>
</template>
<script setup>
const whtasHappeningItems = ref([
  {
    title: "SpaceX",
    count: "18.8 Tweets",
  },
  {
    title: "#CodingIsFun",
    count: "18.8 Tweets",
  },
  {
    title: "#Mahsa_Amini",
    count: "18.8 Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
]);
</script>
