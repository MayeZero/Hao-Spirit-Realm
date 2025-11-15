# 加载必要的包
library(ggplot2)
library(reshape2)

# 创建数据框
data <- data.frame(
  ID = c("ID01", "ID02", "ID03", "ID04", "ID05", "ID06", "ID07"),
  Navigation = c(3, 4, 2, 4, 3, 5, 4),
  Instructions = c(5, 3, 3, 4, 4, 4, 5),
  UI_Friendliness = c(3, 5, 3, 5, 5, 5, 5),
  Feedback = c(5, 4, 5, 4, 4, 3, 4),
  Iteration_Management = c(4, 5, 2, 4, 4, 5, 3),
  Usability = c(4, 4, 3, 5, 4, 5, 5)
)

# 将数据从宽格式转为长格式
data_long <- melt(data, id.vars = "ID", variable.name = "Category", value.name = "Score")

# 绘制美化后的折线图
ggplot(data_long, aes(x = ID, y = Score, color = Category, group = Category)) +
  geom_line(size = 1.2) +               # 加粗线条
  geom_point(size = 3) +                # 加大数据点
  scale_color_manual(values = c(        # 自定义颜色
    "Navigation" = "#1f77b4",
    "Instructions" = "#ff7f0e",
    "UI_Friendliness" = "#2ca02c",
    "Feedback" = "#d62728",
    "Iteration_Management" = "#9467bd",
    "Usability" = "#8c564b"
  )) +
  labs(title = "Ratings by Category for Each ID",
       x = "ID",
       y = "Score") +
  theme_minimal(base_size = 15) +       # 使用极简主题并增大字体
  theme(panel.grid = element_blank(),   # 去除网格线
        panel.background = element_rect(fill = "white", color = NA), # 设置背景为白色
        legend.position = "bottom",     # 将图例放置在下方
        legend.title = element_blank(), # 去除图例标题
        plot.title = element_text(hjust = 0.5, face = "bold"))       # 标题居中并加粗

