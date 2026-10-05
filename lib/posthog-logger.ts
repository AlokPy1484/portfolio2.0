import posthog from "posthog-js"

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST
)

export const portfolioLogger = {
  consultationBookingOpened() {
    if (isPostHogConfigured) {
      posthog.logger.info("consultation booking opened", {
        action: "consultation_booking_started",
      })
    }
  },

  projectOpened(projectCategory: string) {
    if (isPostHogConfigured) {
      posthog.logger.info("portfolio project opened", {
        action: "project_opened",
        project_category: projectCategory,
      })
    }
  },

  articleOpened(publicationYear: number) {
    if (isPostHogConfigured) {
      posthog.logger.info("portfolio article opened", {
        action: "article_opened",
        publication_year: publicationYear,
      })
    }
  },
}
