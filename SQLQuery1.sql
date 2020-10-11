﻿


CREATE TABLE Users (
	 Id int primary key,
	 CreationDate Date,
	 DisplayName nvarchar(255),
	 LastAccessDate Date,
	 WebsiteUrl nvarchar(255),
	 Region nvarchar(255),
	 AboutMe text,
	 UpVotes int,
	 DownVotes int,
	 ProfileImageUrl text,
	 Email text,
	 Age int,
	 Account varchar(255),
	 PasswordHash text,
);
CREATE TABLE Posts (
     Id int primary key,
	 PostTypeId int,
	 ParentId int,
	 CreationDate Date,
	 Score int,
	 ViewCount int,
	 OwnerUserId int,
	 LastEditorUserId int,
	 LastEditorDisplayName nvarchar(255),
	 LastActivityDate Date,
	 Title nvarchar(255),
	 Tags nvarchar(255),
	 AnswerCount int,
	 CommentCount int,
	 FavouriteCount int,
	 ClosedDate Date,
	 CommunityOwnedDate Date,
	 isAudioQuestion int ,
	FOREIGN KEY (OwnerUserId) REFERENCES Users(Id)
);
CREATE TABLE PostFeedback(
	 Id int primary key,
	 PostId int,
	 IsAnonymous int,
	 Content text,
	 CreationDate Date,
	 isAcceptedAnswer int,
	FOREIGN KEY (PostId) REFERENCES Posts(Id)
);
CREATE TABLE Comments(
	 Id int primary key,
	 PostId int,
	 Score int,
	 Content Text,
	 CreationDate Date,
	 UserDisplayName nvarchar(255),
	 UserId int,
	FOREIGN KEY (PostId) REFERENCES PostFeedback(Id),
	FOREIGN KEY (UserId) REFERENCES Users(Id)
);
CREATE TABLE VoteType (
	 Id int primary key,
	 VoteValue int,
);
CREATE TABLE Votes (
	 Id int primary key,
	 PostId int,
	 VoteTypeId int,
	 UserId int,
	 CreationDate Date,
	 BountyAmount int,
	FOREIGN KEY (PostId) REFERENCES Posts(Id),
	FOREIGN KEY (UserId) REFERENCES Users(Id),
	FOREIGN KEY (VoteTypeId) REFERENCES VoteType(Id)
);
CREATE TABLE Tags(
	 Id int primary key,
	 TagName nvarchar(255),
	 CountNumber int,
);
CREATE TABLE Badges (
	Id int primary key,
	UserId int,
	Content nvarchar(255),
	DateAchieved Date ,
	Reputation int,
	FOREIGN KEY (UserId) REFERENCES Users(Id)
);

CREATE TABLE  PostLinks (
	Id int  primary key,
	CreationDate Date,
	PostId int,
	RelatedPostId int,
	LinkTypeId text,
	FOREIGN KEY (PostId) REFERENCES Posts(Id)
);
CREATE TABLE  PostHistory (
	Id int  primary key,
	PostHistoryTypeId int ,
	PostId int,
	RevisionGUID int,
	CreationDate Date,
	UserId int,
	UserDisplayName int,
	Comment Text,
	Content Text ,
	FOREIGN KEY (PostId) REFERENCES Posts(Id),
	FOREIGN KEY (UserId) REFERENCES Users(Id)
);
CREATE TABLE  ReviewRejectionReasons(
	 Id int primary key,
	 Name nvarchar(255),
	 Descriptions Text,
	 PostTypeId int,
);
CREATE TABLE  ReviewTaskStates(
	 Id int primary key,
	 ReviewTaskStatesName nvarchar(255),
	 Descriptions Text,
);
CREATE TABLE  PendingFlags(
	 Id int primary key,
	 FlagTypeId int,
	 PostId int,
	 CreationDate Date ,
	 CloseReasonTypeId int,
	 CloseAsOffTopicReasonTypeId int,
	 DuplicateOfQuestionId int,
	 BelongsOnBaseHostAddress text,
	FOREIGN KEY (PostId) REFERENCES Posts(Id)
);
CREATE TABLE  ReviewTasks(
	 Id int primary key,
	 ReviewTaskTypeId int,
	 CreationDate Date,
	 DeletionDate Date,
	 ReviewTaskStateId int,
	 PostId int,
	 SuggestedEditId int,
	FOREIGN KEY (PostId) REFERENCES Posts(Id)
);
CREATE TABLE  SuggestedEdits(
	 Id int primary key,
	 PostId int,
	 CreationDate int,
	 ApprovalDate Date,
	 RejectionDate Date,
	 OwnerUserId int,
	 Comment Text,
	 Content Text,
	 Title  nvarchar(255),
	 Tags nvarchar(255),
	 RevisionGUID int,
	FOREIGN KEY (PostId) REFERENCES Posts(Id)
);
CREATE TABLE  ReviewTaskResults(
	 Id int primary key,
	 ReviewTaskId int,
	 ReviewTaskResultTypeId int,
	 CreationDate Date,
	 RejectionReasonId int,
	 Comment Text,
)
CREATE TABLE  SuggestedEditVotes(
	 Id int primary key,
	 SuggestedEditId int,
	 UserId int,
	 VoteTypeId int,
	 CreationDate Date,
	 TargetUserId int,
	 TargetRepChange nvarchar(255),
	FOREIGN KEY (UserId) REFERENCES Users(Id)
);
CREATE TABLE  TagSynonyms(
	 Id int primary key,
	 SourceTagName nvarchar(255),
	 TargetTagName nvarchar(255),
	 CreationDate int,
	 OwnerUserId int,
	 AutoRenameCount int,
	 LastAutoRename Date,
	 Score int,
	 ApprovedByUserId int,
	 ApprovalDate Date,
	FOREIGN KEY (OwnerUserId) REFERENCES Users(Id)
);