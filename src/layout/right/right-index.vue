<template>
  <div class="container">
    <AuthorCard></AuthorCard>
    <el-affix :offset="20">
      <WebsiteInfo></WebsiteInfo>
      <RecommandArticle></RecommandArticle>
    </el-affix>
    <!-- TODO 访客信息 -->
    <!-- TODO 标签 -->
  </div>
</template>

<script setup>
import AuthorCard from "@/components/author/author-card.vue";
import WebsiteInfo from "@/components/website/website-info.vue";
import RecommandArticle from "@/components/recommand/recommand-article.vue";
</script>

<style lang="scss" scoped>
.container {
  width: 20%;
}
</style>
